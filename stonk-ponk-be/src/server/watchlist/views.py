from django.shortcuts import render

import json

from django.http import HttpResponse, HttpResponseBadRequest, HttpResponseForbidden, HttpResponseNotFound
from django.views.decorators.http import require_http_methods

from account.models import User
from account.auth import require_token, get_user
from portfolio.models import Portfolio, PortfolioStock, StockOwnership, Transaction
from watchlist.models import Watchlist, StockWatch

from api_interface.stock_api_interface import StockApiInterface as stock_api

@require_http_methods(["POST"])
@require_token
def create_watchlist(request):
    body = json.loads(request.body.decode("utf-8"))
    user = get_user(request)
    name = body["label"] 

    # how do we want to handle things that have been aleady created?
    wl = Watchlist.objects.create(user = user, name = name) 
    responseData = { "id": wl.id, "label": wl.name}
    return HttpResponse(json.dumps(responseData))

@require_http_methods(["DELETE"])
@require_token
def delete_watchlist(request):
    body = json.loads(request.body.decode("utf-8"))
    user = get_user(request)

    watchlist_id = body["id"]
    try:
        wl = Watchlist.objects.get(id = watchlist_id, user = user) 
        if wl.user != user:
            return HttpResponseBadRequest("you naughty naughty")
        wl.delete()
    except Watchlist.DoesNotExist:
        return HttpResponseNotFound()
    
    return HttpResponse() 

@require_http_methods(["POST"])
@require_token
def save_watchlist(request):
    body = json.loads(request.body.decode("utf-8"))
    user = get_user(request)
    watchlist = body["id"]
    
    try:
        wl = Watchlist.objects.get(id = watchlist, user = user)
        tickers = [x["ticker"] for x in body["tickers"]]
        wl.save_stocks(set(tickers))

    except Watchlist.DoesNotExist:
        return HttpResponseNotFound() 
    
    return HttpResponse()    

@require_http_methods(["GET"])
@require_token
def get_watchlists(request):
    #get all watchlists associated with a user 
    user = get_user(request)
    ret = {"watchlists" : []}

    for wl in Watchlist.objects.filter(user = user):
        ret["watchlists"].append({"id" : wl.id, "label" : wl.name})

    return HttpResponse(json.dumps(ret))

@require_http_methods(["GET"])
@require_token
def get_watchlist_stocks(request):
    #given a watchlist id, return json array of stocks with relevant information
    wid = int(request.GET.get("id"))
    user = get_user(request)
   
    watchlist = Watchlist.objects.get(id = wid)
    if watchlist.user != user:
        return HttpResponseBadRequest("you naughty naughty")
    tickers = [sw.ticker for sw in list(StockWatch.objects.filter(watchlist = watchlist))]
    
    stock_data_list = []

    for ticker in tickers:
        stock_dict = {}
        stock_dict['ticker'] = ticker
        stock_dict['price'] = stock_api.get_price(ticker)
        stock_dict['name'] = stock_api.check_stock(ticker)['name']
        stock_dict['prices'] = stock_api.get_stock_prices(ticker, "market")
        stock_data_list.append(stock_dict)
    
    return HttpResponse(json.dumps(stock_data_list))
