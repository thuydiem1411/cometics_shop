import Card from "../UI/Card"
import {discover} from "../pages/data"
const Discover = () => {
  return (
    <section className="discover">
        <h3 className="home__title">DISCOVER REN</h3>
        <div className="container__discover">
        {
            discover.map(({id,title,content,img})=>{
                return(
                    <div className="container__card">
                    <Card key={id} className="discover">
                        <img src={img} alt={title} />
                        <h3 className="title__discover">{title}</h3>
                        <p className="content__discover">{content}</p>
                    </Card>
                    </div>
                )
            })
        }
        </div>
      
    </section>
  )
}

export default Discover
