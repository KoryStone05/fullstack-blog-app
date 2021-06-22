import './Header.css'

function Header() {
    return (
        <div className='header'>
            <div className='headerTitles'>
                <span classNam='headerTitleSm'>React & Node</span>
                <span className='headerTitleLg'>Blog</span>
            </div>
            <img className='headerImg' src='https://images.unsplash.com/flagged/photo-1551706646-9c816bfbff8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
                alt=''
            />
        </div>
    )
}

export default Header
