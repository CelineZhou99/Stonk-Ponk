from api_interface.alphavantage_forex_api import AaForexApi
<<<<<<< HEAD
from administration.models import StockApiPriority
=======
from api_interface.yf_forex_api import YfForexApi

>>>>>>> master
class ForexApiInterface:
    forex_api_map = {}
    forex_api_map['alphavantage'] = AaForexApi()
    forex_api_map['yahoo_finance'] = YfForexApi()

<<<<<<< HEAD
    forex_api_list = [{"name":"alphavantage", "priority": 1}]
    def get_forex_api_priorities():
        #refer to admin database
        ret = []
        for i in ForexApiPriority.objects.all():
            ret.append({"name" : i.name, "priority" : i.priority})
        return ret

    def get_ordered_forex_api_list():
        #call get_stock_api_priorities(), then sort
        return sorted(ForexApiInterface.get_forex_api_priorities(), key = lambda item: item['priority'])

=======
    forex_api_list = [{"name":"alphavantage", "priority": 1}, {"name":"yahoo_finance", "priority": 2}]
>>>>>>> master

    @staticmethod
    def get_forex_api_order():
        return ForexApiInterface.get_ordered_forex_api_list()
    
    #gets priority list from admin and sorts based on priority
    def set_forex_api_order(order_list):
        try:
<<<<<<< HEAD
            #ForexApiInterface.get_ordered_forex_api_list() = sorted(ForexApiInterface.get_ordered_forex_api_list(), key = lambda item: item['priority'])
=======
            ForexApiInterface.forex_api_list = sorted(order_list, key = lambda item: item['priority'])
>>>>>>> master
            return True
        except:
            return False 
    
    def get_currency_exchange(from_currency, to_currency):
        for api_dict in ForexApiInterface.get_ordered_forex_api_list():
            try:
                api = ForexApiInterface.forex_api_map[api_dict['name']]
                return api.get_currency_exchange(from_currency, to_currency)
            except:
                continue

        return False
    
    def calc_forex_rate(from_value, from_currency, to_currency):
        forex_rate = ForexApiInterface.get_currency_exchange(from_currency, to_currency)
<<<<<<< HEAD
        exchange_rate = from_value * forex_rate
        return exchange_rate
=======
        exchange_value = float(from_value) * float(forex_rate)
        return exchange_value
>>>>>>> master
