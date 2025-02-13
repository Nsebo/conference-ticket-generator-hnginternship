import NavigationStyles from './styles.module.css'

 const Navigation=({back,next,onClick})=>{
        return (
            <section className={NavigationStyles.container}>
                <button className={NavigationStyles.container__Cancel} onClick={onClick}>{back}</button>
                <button className={NavigationStyles.container__Next} onClick={onClick}>{next}</button>
            </section>
        )
 }

 export default Navigation;