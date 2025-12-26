import { Tabs } from "antd";

const items = [
  {
    key: "1",
    label: "Start",
    children: "Start",
  },
  {
    key: "2",
    label: "Art & Literature",
    children: "Art & Literature",
  },
  {
    key: "3",
    label: "Entertainment",
    children: "Entertainment",
  },
  {
    key: "4",
    label: "Geography",
    children: "Geography",
  },
  {
    key: "5",
    label: "History",
    children: "History",
  },
  {
    key: "6",
    label: "Languages",
    children: "Languages",
  },
  {
    key: "7",
    label: "Science & Nature",
    children: "Science & Nature",
  },
  {
    key: "8",
    label: "Sports",
    children: "Sports",
  },
  {
    key: "9",
    label: "Trivia",
    children: "Trivia",
  },
];

const Category = () => <Tabs defaultActiveKey="1" items={items} />;

export default Category;
