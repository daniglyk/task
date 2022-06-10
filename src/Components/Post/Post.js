import React, { Component } from "react";
import "../../styles/App.scss";

class Post extends Component {
  render() {
    return (
      <div className="Post">
        <form className="sometext">
          <textarea
            value={this.props.value}
            onChange={this.props.handleChange}
            placeholder="Введите техт"
          ></textarea>
          <button className="save" onClick={this.props.handleSubmit}>
            Добавить
          </button>
        </form>
        <form className="TagSearch">
          <input
            placeholder="Поиск по тегу"
            value={this.props.tag}
            onChange={this.props.noteChange}
          />
          <button className="tagButton" onClick={this.props.searchTag}>
            Найти
          </button>
        </form>
        <ul className="listBox">
          {this.props.data.length > 0
            ? this.props.data.map((item, index) => (
                <div key={index} className="notes">
                  <li
                    onClick={() => this.props.handleActive(item)}
                    className="someNote"
                  >
                    {item}
                  </li>
                  <button
                    onClick={() => this.props.edit(index)}
                    className="changeNote"
                  >
                    Изменить
                  </button>
                  <button
                    onClick={() => this.props.delPost(index)}
                    className="delNote"
                  >
                    Удалить
                  </button>
                </div>
              ))
            : null}
        </ul>
        <ul className="containerNote">
          {this.props.note.length > 0
            ? this.props.note.map((item, index) => (
                <div key={index} className="tags">
                  <li className="someTag">{item}</li>
                  <button
                    onClick={() => this.props.delHashtag(index)}
                    className="delTag"
                  >
                    Удалить тэг
                  </button>
                </div>
              ))
            : null}
        </ul>
      </div>
    );
  }
}

export default Post;
