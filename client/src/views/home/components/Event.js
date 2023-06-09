import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {user} from "../../../context/Reducer";
import './EventCard.css';

const Event = () => {
    const params = useParams();
    const [event, setEvent] = useState({});
    //const [ticketClick, setTicketClick] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        if (params && params.id) {
            fetch('/api/event/' + params.id)
                .then(response => response.json())
                .then(result => {
                    setEvent(result)
                    console.log(event.tickets)
                })
            
        }
    }, [params])


    const handleOnClick = (ticketId) => {
        navigate(`/reserve/${params.id}/${ticketId}`);
        window.location.reload();
    }

    const renderTicket = (ticket) => {
      return <div className="card mb-3">
              <div className="ticket">
                  <h5 className={`ticketText ${ticket.availableTickets !== 0 ? '' : 'disabled'}`}>{ticket.ticketTypeDTO.ticketType}</h5>
                  <p className={`ticketText ${ticket.availableTickets !== 0 ? '' : 'disabled'}`}>{ticket.ticketTypeDTO.ticketPrice + 'BAM'}</p>
                  <p className={`ticketText ${ticket.availableTickets !== 0 ? '' : 'disabled'}`}>{ticket.availableTickets + '/' + ticket.totalTickets}</p>
                  {user && user.userType === "USER" && <button type="button" class="btn btn-dark" onClick = {() => handleOnClick(ticket.id)}>Reserve</button>}
              </div>
          </div>
    }

    return <>
        {
            event &&
            <div className="cardBody">
                <div className="row no-gutters">
                    <div className="col-md-10">
                        <h5 className="cardTitle">
                            {event.title}
                        </h5>
                        <p className="typeAndDate">
                            {event.type}
                        </p>
                        <p className="typeAndDate">
                            {event.date}
                        </p>
                        <p className="cardText">
                            {event.description}
                        </p>
                        <img src={`data:image/png;base64,${event.picture}`} className="card-img" alt="..."/>
                    </div>
                    <div className="col-md-2">
                        {
                            event.tickets &&
                            event.tickets.map(ticket => renderTicket(ticket))
                        }
                    </div>
                </div>
            </div>
        }
    </>

}

export default Event;