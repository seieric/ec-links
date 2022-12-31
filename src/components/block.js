import { RawHTML } from "@wordpress/element";
import { isURL } from "../helpers";

const Link = ({ link }) => {
    // タグが入力されていないときは保存・表示しない
    if (link.tag === "" | link.tag == null) return <></>;
    let tag = <RawHTML>{link.tag}</RawHTML>;
    if (isURL(link.tag)) {
        let text = "";
        switch (link.type) {
            case "ec-amazon":
                text = "Amazon";
            case "ec-rakuten":
                text = "楽天市場";
            case "ec-yahoo":
                text = "Yahoo!ショッピング";
            default:
                text = "商品ページ";
        }
        const target = link.newtab ? "_blank" : false;
        tag = <a href={link.tag} target={target}>{text}</a>;
    }
    return <li className={link.type}>{tag}</li>;
};

export default function ECLinksBlock({ attributes, className }) {
    const Image = () => {
        if (isURL(attributes.image)) return <img src={attributes.image} alt={attributes.title} />;
        return <RawHTML>{attributes.image}</RawHTML>
    };
    className += " ec-links-default-block-container";
    return (
        <div className={className}>
            <div className="ec-links-default-block-image"><Image /></div>
            <div className="ec-links-default-block-details" data-skin={attributes.skin}>
                <p className="ec-links-default-block-title">{attributes.title}</p>
                <p className="ec-links-default-block-description">{attributes.description}</p>
                <ul className="ec-links-default-block-links">
                    {attributes.links.map((link, i) => <Link link={link} key={i} />)}
                </ul>
            </div>
        </div>
    );
}