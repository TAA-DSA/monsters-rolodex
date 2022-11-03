import { Component } from "react";
import "./card-list.style.css";
import Card from "../cards/card.component";

class Cardlist extends Component {
  render() {
    console.log(this.props);
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}

export default Cardlist;
