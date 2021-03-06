import { GetWatchlistNameLink, CreateWatchlistLink, DeleteWatchlistLink, GetWatchlistStockLink, UpdateWatchlistLink } from '../api-links/constants';

const getWatchlistName = async () => {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}`,
        },
    };
    return await fetch(GetWatchlistNameLink, requestOptions)
        .then(response => {
            if (response.ok) { // if status code is 200      
                return response;
            } // if status code is not 200
            else if (response.status === 403) {
                return Promise.reject('Expired token');
            } else {
                return Promise.reject('Something went wrong while retrieving watchlist information. Please refresh.');
            }
        })
}

const getWatchlistStocks = async (id) => {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}`,
        },
    };
    return await fetch(`${GetWatchlistStockLink}?id=${id}`, requestOptions)
        .then(response => {
            if (response.ok) { // if status code is 200      
                return response;
            } // if status code is not 200
            else if (response.status === 403) {
                return Promise.reject('Expired token');
            } else {
                return Promise.reject('Something went wrong while retrieving watchlist information. Please refresh.');
            }
        })
}

const createWatchlist = async (watchlistName) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
            label: watchlistName,
        }),
    };
    return await fetch(CreateWatchlistLink, requestOptions)
        .then(response => {
            if (response.ok) { // if status code is 200      
                return response;
            } // if status code is not 200
            else if (response.status === 403) {
                return Promise.reject('Expired token');
            } else {
                return Promise.reject('Something went wrong while creating the watchlist. Please retry.');
            }
        })
}

const deleteWatchlist = async (id) => {
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
            id: id,
        }),
    };
    return await fetch(DeleteWatchlistLink, requestOptions)
        .then(response => {
            if (response.ok) { // if status code is 200      
                return response;
            } // if status code is not 200
            else if (response.status === 403) {
                return Promise.reject('Expired token');
            } else {
                return Promise.reject('Something went wrong while deleting the watchlist. Please retry.');
            }
        })
}

const updateStockToWatchlist = async (id, tickers) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
            id: id,
            tickers: tickers,
        }),
    };
    return await fetch(UpdateWatchlistLink, requestOptions)
        .then(response => {
            if (response.ok) { // if status code is 200      
                return response;
            } // if status code is not 200
            else if (response.status === 403) {
                return Promise.reject('Expired token');
            } else {
                return Promise.reject('Something went wrong while updating the watchlist. Please retry.');
            }
        })
}

export const watchlist = {
    getWatchlistName,
    getWatchlistStocks,
    createWatchlist,
    deleteWatchlist,
    updateStockToWatchlist,
};