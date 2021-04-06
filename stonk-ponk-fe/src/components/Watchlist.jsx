import React, { useState } from 'react';
import Navigation from './Navigation';
import { Container, PageContainer, FlexRowDiv, FlexRowEndDiv } from "../css/Div";
import { PageTitle, SubTitle, SubText } from "../css/Text";
import { CustomButton } from '../css/Button';
import Select from 'react-select';
import { customStyles } from '../helpers/styles';
import StockTable from './StockTable';

const headings = [
    { id: 'name', disablePadding: true, numeric: false, label: 'Name' },
    { id: 'performance', disablePadding: false, numeric: false, label: 'Performance' },
    { id: 'price', disablePadding: false, numeric: true, label: 'Current Price' },
];

const Watchlist = () => {
    // dummy watchlist names
    const watchlistNames = [
        { label: 'Big Tech Companies' },
        { label: 'Small Tech Companies' },
    ];
    // hardcoded for now
    const [currentWatchlist, setCurrentWatchlist] = useState('Big tech companies');
    const [watchlistData, setWatchlistData] = useState([]);
    const [page, setPage] = useState(0);

    return (
        <>
            <Navigation />
            <PageContainer>
                <FlexRowDiv>
                    <PageTitle>Watchlist</PageTitle>
                    <CustomButton backgroundColor="#9e22ff" hoverColor="#b55cfa">Add New Watchlist</CustomButton>
                </FlexRowDiv>
                <FlexRowEndDiv>
                    <SubText style={{ marginRight: "10px" }}>Watchlist:</SubText>
                    <Select styles={customStyles} options={watchlistNames} defaultValue={watchlistNames[0]} aria-label="Drop down to select to view different watchlists" onChange={(e) => setCurrentWatchlist(e.label)} />
                </FlexRowEndDiv>
                <Container flex_direction="column" gap="1em" justify_content="center" align_items="center">
                    <FlexRowDiv style={{ width: "100%" }}>
                        <SubTitle style={{ margin: "5px" }}>{currentWatchlist}</SubTitle>
                        <FlexRowDiv style={{ margin: "5px" }}>
                            <CustomButton backgroundColor="#44BCFF" hoverColor="#b55cfa" style={{ marginRight: "10px" }}>What if I owned this?</CustomButton>
                        </FlexRowDiv>
                    </FlexRowDiv>
                    <StockTable data={watchlistData} headings={headings} place="watchlist" setRows={setWatchlistData} page={page} setPage={setPage}></StockTable>
                </Container>
            </PageContainer>
        </>
    )
}

export default Watchlist;