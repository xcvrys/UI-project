import Article from "../data/articles.json";

export default function GetArticleData(id: string | undefined) {
  if (!id) {
    return Article.articles[Math.floor(Math.random() * Article.articles.length)];
  }

  const foundArticle = Article.articles.find((article) => article.id === parseInt(id));

  if (!foundArticle) {
    return { error: "No article found" };
  }

  return foundArticle;
}




export interface ArticleType {
  articles: ArticleElement[];
}

export interface ArticleElement {
  id: number;
  title: string;
  image: string;
  content: Content[];
  error?: string;
}

export interface Content {
  type: ContentType;
  text?: string;
  items?: Item[];
}

export interface Item {
  type: ItemType;
  text: string;
  text_header?: string;
}

export enum ItemType {
  ListItem = "list-item",
}

export enum ContentType {
  Heading = "heading",
  List = "list",
  Paragraph = "paragraph",
}

export interface Erorr {
  error: string;
}
