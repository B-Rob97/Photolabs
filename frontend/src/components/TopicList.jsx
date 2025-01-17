import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {

  return (
    <div className="top-nav-bar__topic-list">
      {props.topicData.map(({ id, slug, title }) => (
        <TopicListItem
          key={id}
          id={id}
          slug={slug}
          title={title}
          showTopicPhotos={props.showTopicPhotos}
          darkMode={props.darkMode}
        />
      ))}
    </div>
  );
};

export default TopicList;
