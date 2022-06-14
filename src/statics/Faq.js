import React from "react";

const Faq = [
    {
        question: 'What is a Raffle?',
        answer: (
            <div>
                A Raffle is a crowdfunding service that aims to enable anyone to raise enough money
                needed for a project. The project can be a direct donation to a charity, an academic
                or business plan, or anything else the creator can convince people to part with their hard-earned ERG
                for.
                <br/>
                As an added bonus, after finishing the Raffle, a lottery takes place, and a lucky participant wins the
                Raffle reward.
                <br/>
                The probability of winning the Raffle reward is proportional to the participation;
                the more donations to the crowdfunding campaign, the more chance of winning the prize!
                <br/>
                This Raffle service is based on the Ergo network and raises Ergs for the projects.
                Other Raffle settings are adaptable and can be customized by the Raffle creator.
            </div>
        )
    }, {
        question: 'How to create a new Raffle?',
        answer: (
            <div>
                This service is open for anyone who wants to start a legal crowdfunding campaign!
                <br/>
                To start a new Raffle, visit the "Create Raffle" page and fill in the specified information,
                including a description, price, funding goal, Raffle deadline, and a winner reward percentage.
                <br/>
                An address is then created based on the provided information, and you pay a small network fee to
                start the Raffle. The proxy contract working behind the scenes for the Raffle creation guarantees
                that the Raffle is created with your specified information. In case of any issues, you can refund your
                creation fee before the Raffle is created.
                <br/>
            </div>
        )
    }, {
        question: 'How to participate in a Raffle?',
        answer: (
            <div>
                Anyone can participate in the active Raffles by buying tickets. The Raffle creator sets the ticket
                price, and the number of tickets you purchase will determine your chance of winning the prize pool.
                However, there is no benefit to splitting your orders to try and garner a higher chance of winning and
                it is best to buy at once.
                <br/>
                You set the wallet address and specify the number of tickets you want to buy on the Raffle page. An
                address is generated to which you send funds to complete your order.
                <b> Please pay close attention to the wallet address you've set </b>
                as any rewards will also be sent to this address if you win the Raffle. Or in the case of an
                unsuccessful Raffle or any problems, refunds will also be sent to this address.
            </div>
        )
    }, {
        question: 'How do Raffles finish?',
        answer: (
            <div>
                Each Raffle has a deadline set based on the network height and a goal set by the Raffle creator for
                raised funds. If the Raffle can raise enough money within the deadline, it will be marked as successful
                and funded. At the same time, the Raffle prize-pool winner will also be announced and rewarded.
                <br/>
                If the Raffle can not raise enough money within the deadline, the Raffle is unsuccessful, and all
                donators will be refunded. You are free to submit again with improvements or based on feedback from the
                community.
            </div>
        )
    }, {
        question: 'What are Raffle fees?',
        answer: (
            <div>
                There are three types of fees within Raffles. A Raffle creation fee, a Raffle donation fee, and a
                service fee. The first two fees are just network transaction fees; we do not charge any more for the
                service than facilitating the Raffle creation and donation.
                <br/>
                Currently, 5% of the total raised money by a successful Raffle is paid as a service fee.
                <br/>
                It is worth mentioning that the service is fully decentralized; anyone can join the Raffle or mark a
                Raffle as successful or unsuccessful and take the needed actions. However, this service is designed such
                that anyone with any amount of knowledge can use it. The service uses proxy contracts for its
                activities; an advanced user can use this service through raw scripts and reduce the proxy transaction
                fees. You can read more technical details on the documentation page.
            </div>
        )
    }, {
        question: "Do I need a license to host a raffle on your platform?",
        answer: "No. All Raffles on our platform are legally classed as 'prize competitions' which do not require a license."
    }, {
        question: "What should I put in my description?",
        answer: "Your description should ideally provide an external link to verify authenticity if required."
    }, {
        question: "Can I host a raffle in my business name?",
        answer: "Yes. You can host a raffle in your personal name or your business name."
    }, {
        question: "What is the minimum ticket price I can charge for my raffle?",
        answer: "Technically, 0.XX ERG, however, we recommend looking through previous successful raffles to gauge the best level for your raffle."
    }, {
        question: "What is the maximum ticket price I can charge for my raffle?",
        answer: "There is no maximum price. However, if the ticket is too expensive people may be discouraged from entering."
    }, {
        question: "Can entrants purchase more than one raffle ticket?",
        answer: "Yes, entrants can purchase as many tickets as they like."
    }, {
        question: "What happens if the Raffle isn’t funded by the draw date?",
        answer: "Entrants will have their funds refunded and your Raffle will be marked as unsuccessful."
    }
]

const SupportFaq = [
    {
        question: "I put in the wrong date - can I cancel my Raffle?",
        answer: "Unfortunately, raffles cannot be altered after creation. Your best bet is to create a second raffle and distribute the new link instead.",
    }
]

export default Faq

export {
    SupportFaq
}
