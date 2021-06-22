import './topbar.css'

const TopBar = () => {
    return (
        <div className='top'>
            <div className='topLeft'>
                <i className='topIcon fab fa-facebook-square'></i>
                <i className='topIcon fab fa-twitter-square'></i>
                <i className='topIcon fab fa-facebook-square'></i>
                <i className='topIcon fab fa-instagram-square'></i>
            </div>
            <div className='topCenter'>
                <ul className='topList'>
                    <li className='topListItem'>HOME</li>
                    <li className='topListItem'>ABOUT</li>
                    <li className='topListItem'>CONTACT</li>
                    <li className='topListItem'>WRITE</li>
                    <li className='topListItem'>LOGOUT</li>

                </ul>
            </div>
            <div className='topRight'>
                <img src='https://media-exp1.licdn.com/dms/image/C4E03AQGIk0R04yCOnQ/profile-displayphoto-shrink_800_800/0/1571411596737?e=1629936000&v=beta&t=3qelVNRQbHvz5F_S1HXu0Gu1ewU529zxv0IyeX8kqZY' className='topIMG' alt='' />
                <i className='topSearchIcon fas fa-search'></i>
            </div>
        </div>
    )
}

export default TopBar
