import './CreateTicket.css'

function CreateTicket(){
    return(
        <div className="container" id='createTicket'>
            <h3 className="mt-5">To create a ticket, select a relevant topic</h3>

            <div className="row ticket p-5" id="row1">
                <div className="col">
                    <h2> <i class="fa-solid fa-user-plus"></i>&nbsp;Account Opening</h2>
                    <br />
                    <span>
                        <a href="">Resident individual</a>
                        </span><br />
                        <span><a href="">Minor</a></span>
                        <br />
                        <span>
                            <a href="">Non Resident Indian (NRI)</a></span>
                            <br />
                            <span>
                                <a href="">Company, Partnership, HUF and LLP</a>
                                </span>
                                <br />
                                <span><a href="">Glossary</a></span>
                </div>
                <div className="col">
                     <h2><i class="fa-solid fa-user"></i> &nbsp;Your Zerodha Account</h2><br />
                    <span>
                        <a href="">Your Profile</a>
                        </span><br />
                        <span><a href="">Account modification</a></span>
                        <br />
                        <span>
                            <a href="">Client Master Report (CMR) and Depository Participant (DP)</a></span>
                            <br />
                            <span>
                                <a href="">Nomination</a>
                                </span>
                                <br />
                                <span><a href="">Transfer and conversion of securities</a></span>
                </div>
                <div className="col">
                      <h2> <i class="fa-solid fa-chart-simple"></i> &nbsp;Kite</h2>
                      <br />
                    <span>
                        <a href="">IPO</a>
                        </span><br />
                        <span><a href="">Trading FAQs</a></span>
                        <br />
                        <span>
                            <a href="">Margin Trading Facility (MTF) and Margins</a></span>
                            <br />
                            <span>
                                <a href="">Charts and orders</a>
                                </span>
                                <br />
                                <span><a href="">Alerts and Nudges</a></span>
                                <br />
                                <span><a href="">General</a></span>
                </div>
            </div>
            <div className="row p-5 ticket" id="row2">
                <div className="col">
                    <h2><i class="fa-solid fa-wallet"></i> &nbsp; Funds</h2>
                    <br />
                    <span>
                        <a href="">Add money</a>
                        </span><br />
                        <span><a href="">Withdraw money</a></span>
                        <br />
                        <span>
                            <a href="">Add bank accounts</a></span>
                            <br />
                            <span>
                                <a href="">eMandates</a>
                                </span>
                                
                </div>
                <div className="col">
                     <h2><i class="fa-solid fa-circle-radiation"></i> &nbsp; Console</h2>
                     <br />
                    <span>
                        <a href="">Portfolio</a>
                        </span><br />
                        <span><a href="">Corporate actions</a></span>
                        <br />
                        <span>
                            <a href="">Funds statement</a></span>
                            <br />
                            <span>
                                <a href="">Reports</a>
                                </span>
                                <br />
                                <span><a href="">Profile</a></span>
                                <br />
                                <span><a href="">Segments</a></span>
                </div>
                <div className="col">
                      <h2><i class="fa-solid fa-coins"></i> &nbsp;  Coin</h2>
                      <br />
                    <span>
                        <a href="">Mutual funds</a>
                        </span><br />
                        <span><a href="">National Pension Scheme (NPS)</a></span>
                        <br />
                        <span>
                            <a href="">Features on Coin
</a></span>
                            <br />
                            <span>
                                <a href="">Payments and Orders</a>
                                </span>
                                <br />
                                <span><a href="">General</a></span>
                                
                </div>
            </div>
        </div>
    )
}
export default CreateTicket;