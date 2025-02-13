import React, { useState } from "react";
import ticketStyles from './styles.module.css'
import Card from "../../../components/UI/card";
import { appName } from "../../../helper";
import TicketList from "./ticketList";
import Navigation from "../../../components/UI/Navigation";

document.title=appName.concat('| Select Ticket')
const ticketType=[
    {
        id:1,
        type:"Free",
        description:"Regular Access",
        ticketcount:"20/52"
    },
    {
        id:2,
        type:"$150",
        description:"VIP Access",
        ticketcount:"20/52"
    },
    {
        id:3,
        type:"$150",
        description:"VVIP Access",
        ticketcount:"20/52"
    }
]
const SelectTicket=()=>{
    const [ticketState,setTicketState]=useState({
        ticketType:ticketType[0],
        numberOfTickets:1
    })

    const TicketSelectionCard=({children})=>{
        return (
            <section className={ticketStyles.ticketContainer__ticketCardHeader}>
                {children}
            </section>
        )
    }

    const handleOnSelect=id=>{
        setTicketState(prev=>({
            ...prev,
            ticketType:ticketType.find(x=>x.id===id)
        }))
    }

    return (
        <Card step={1}title='Ticket Selection'>
        <section className={ticketStyles.ticketContainer}>
            <TicketSelectionCard>
                <span className={ticketStyles.ticketContainer__header}>Techember Fest ”25</span>
                <span className={ticketStyles.ticketContainer__body}>Join us for an unforgettable experience at <br/>[Event Name]! Secure your spot now.</span><br/>
                <span className={ticketStyles.ticketContainer__body}>📍 [Event Location]March 15, 2025 | 7:00 PM</span>
            </TicketSelectionCard>
            <section className={ticketStyles.ticketContainer__divider}/>
            <span className={ticketStyles.ticketContainer__selectContainerHeader}>Select Ticket Type</span>
            
            <section className={ticketStyles.ticketContainer__selectContainer}>
                {
                    ticketType.map((ticket)=>{
                        return <TicketList key={ticket.id} selected={ticketState.ticketType.id} description={ticket.description} ticketCount={ticket.ticketcount} type={ticket.type} id={ticket.id} onSelect={handleOnSelect}/>
                    })
                }
            </section>
            <span className={ticketStyles.ticketContainer__selectContainerHeader}>Number of Tickets</span>
            <section className={ticketStyles.ticketContainer__ticketNumberSelectWrapper}>
            <select className={ticketStyles.ticketContainer__ticketNumberSelect} onChange={(e)=>setTicketState(prev=>({...prev,numberOfTickets:e.target.value}))}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
            </select>
                <section className={ticketStyles.ticketContainer__navigation}>
                <Navigation next="Next" back="Cancel"/>

                </section>
            </section>
            
        </section>
         
        </Card>
    )

}
export default SelectTicket;