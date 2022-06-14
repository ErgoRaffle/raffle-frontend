import React from "react";
import loader from '../../assets/img/loader.svg';
import RaffleWork from '../../components/RaffleWork';
import { Suspense } from 'react';
import { getRaffle, getSucceedRaffle } from '../../service/raffle.service';
import Raffle from '../../components/Raffle';
import Title from '../../components/Title';
import { RAFFLE_SORTING_TABS } from '../../statics';
import CarouselBar from './CarouselBar';
import HeadingTitle from '../../webparts/Shared/HeadingTitle';
import Tabs from '../../components/Tabs';
import HomeHeader from './HomeHeader';
import { Link } from "react-router-dom";

class Home extends React.Component {
    state = {
        raffles: [],
        successStories: [],
        progress: false,
        successStoriesProgress: false,
        successFetched: false,
        activeTab: 0,
        rafflesTab: -1
    }

    fetch_data = () => {
        if (!this.state.progress && this.state.rafflesTab !== this.state.activeTab) {
            const activeTab = this.state.activeTab
            this.setState({progress: true});
            const tab = RAFFLE_SORTING_TABS[activeTab];
            getRaffle(0, 6, tab.sorting, tab.status).then(response => {
                this.setState({
                    raffles: response.data.items,
                    progress: false,
                    rafflesTab: activeTab
                })
            })
        }
    }

    fetch_success_stories = () => {
        if (!this.state.successStoriesProgress && !this.state.successFetched) {
            this.setState({successStoriesProgress: true})
            getRaffle(0, 6, "", "succeed").then(response => {
                this.setState({
                    successStories: response.data.items,
                    successStoriesProgress: false,
                    successFetched: true
                })
            })
        }
    }

    componentDidUpdate = () => {
        this.fetch_success_stories();
        this.fetch_data();
    }

    componentDidMount = () => {
        this.fetch_success_stories();
        this.fetch_data();
    }

    render = () => {
        const tabsContent = RAFFLE_SORTING_TABS.map(item => item.title);
        const tab = RAFFLE_SORTING_TABS[this.state.activeTab];
        return (
            <>
                <Title title={'Ergo Raffle - Home'}/>
                <HomeHeader/>
                <section>
                    <div className="container raffle-links-container mt-5">
                        <Tabs tabs={tabsContent}
                              setActiveTab={tabIndex => this.setState({activeTab: tabIndex})}
                              activeTab={this.state.activeTab}/>
                    </div>
                </section>
                <section id="raffle-cards" className="p-lg-5 mt-5">
                    <div className="container">
                        <div className="row g-4">
                            {this.state.progress ?
                                <div className={'loading-wrapper'}><img src={loader} alt={'loading spinner'}/></div> :
                                this.state.raffles.map((item, key) =>
                                    (
                                        <div key={key + item.name + '-raffle-card'} className="col-6 col-lg-4">
                                            <Raffle raffle={item}/>
                                        </div>
                                    )
                                )
                            }
                        </div>
                        <div className="see-more-raffles text-center mt-5">
                            <Link
                                to={"/raffle/list?sorting=" + tab.sorting}
                                className="nav-link see-more-link">
                                See More &#62;
                            </Link>
                        </div>
                    </div>
                </section>
                {!this.state.successFetched ? (
                    <div className={'loading-wrapper'}>
                        <img src={loader} alt={'loading spinner'}/>
                    </div>
                ) : this.state.successStories.length === 0 ? <br/> : (
                    <React.Fragment>
                        <HeadingTitle title={'Success Stories'}/>
                        <CarouselBar raffles={this.state.successStories}/>
                    </React.Fragment>
                )}
                <section>
                    <div className="container">
                        <RaffleWork/>
                    </div>
                </section>
            </>
        )
    }
}


export default Home;
