export default function Article({ children, ...props }) {
  return <article {...props}>{children}</article>;
}
const Title = ({ children, ...props }) => <h2 {...props}>{children}</h2>;
const Content = ({ children, ...props }) => <p {...props}>{children}</p>;
const Footer = ({ children, ...props }) => <span {...props}>{children}</span>;
Article.Title = Title;
Article.Content = Content;
Article.Footer = Footer;
