import ticketStyles from "./styles.module.css";
const TicketList = ({
  type,
  id,
  description,
  ticketCount,
  onSelect,
  selected,
}) => {
  return (
    <section
      className={`${ticketStyles.ticketContainer__ticketCard} ${
        selected === id
          ? ticketStyles["ticketContainer__ticketCard--selected"]
          : ""
      }`}
      onClick={() => onSelect(id)}
    >
      <span className={ticketStyles.ticketContainer__ticketCard__Header}>
        {type}
      </span>
      <span className={ticketStyles.ticketContainer__ticketCard__Description}>
        {description}
      </span>
      <span className={ticketStyles.ticketContainer__ticketCard__count}>
        {ticketCount}
      </span>
    </section>
  );
};

export default TicketList;
