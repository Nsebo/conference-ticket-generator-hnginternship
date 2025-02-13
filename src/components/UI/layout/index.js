import layoutStyles from './styles.module.css'

const Layout=({children})=>{

    return (
        <div className={layoutStyles.background}>
            {children}
        </div>
    )

}

export default Layout;