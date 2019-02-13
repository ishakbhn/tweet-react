
// class User extends React.Component {
//     render() {
//         var user = this.props.
//         return(
//             )
//     }
// }

class List extends React.Component {
    render() {
        let tweets = this.props.tweet.map((item,index) => {
            return  <div key={index}>
                       <img src = {item.user.profile_image_url} />
                       <h4> Kanye West </h4>
                       <p> @{item.user.screen_name} {item.created_at} </p>
                       <p> {item.text}</p>
                       <p> retweet: {item.retweet_count} favorite: {item.favorite_count} </p>
                    </div>
        })
        return (
            <div>
                {tweets}
            </div>
            )
    }
}

ReactDOM.render(
    <div>
    <h2> Kanye West </h2>
    <List tweet = {tweets}/>
    </div>,
    document.getElementById('root')
);