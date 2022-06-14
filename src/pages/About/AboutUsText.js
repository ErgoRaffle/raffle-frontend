import { memo } from "react";

const AboutUsText = memo(() => {
    return (
        <p className="about-us-text">
            <h1>Welcome to ErgoRaffle!</h1>
            <br/>
            ErgoRaffle is a crowdfunding service built on Ergo Platform that enables anyone to raise money for a
            project. This project can range from a direct donation to a charity, an academic or business plan, or
            anything you can convince people to part with their hard-earned ERG for! As an added bonus, after finishing
            the Raffle, a lottery takes place, and one lucky participant wins a set percent of the Raffle as a 'raffle
            reward'.
            <br/>
            Each Raffle has a deadline and a set fundraising goal; if the Raffle reaches this goal within its deadline,
            the Raffle is successful, and the project, winner, and service will be paid accordingly. Otherwise, the
            Raffle is unsuccessful, and all collected funds will be returned to the raffle participants. If the Raffle
            achieves its goal before the deadline, it will continue operating till the deadline and can be overfunded.
            <br/>
            The Raffle is managed by smart contracts built on Ergo Platform. This means that no middlemen are involved,
            and no one can alter or disrupt the Raffle, including the raffle service operator. This website simply acts
            as an interface for the smart contract and was created to provide a better user experience by caching some
            information. The system is designed in a way that anyone can create new raffles or donate to existing
            raffles using the raw scripts, and the raffle service functionality is disjoint from the raffle service
            backend. Although the service backend and frontend are designed in such a way that anyone with any amount of
            knowledge can use the service.
        </p>
    )
});

export default AboutUsText;
