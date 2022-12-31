import { TextControl, SelectControl, TextareaControl, Button, Placeholder, Flex, FlexBlock, FlexItem } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { Icon, plus } from '@wordpress/icons';
import Link from '../../link.class';
import ECLink from "./link";

export default function Edit({ attributes, setAttributes }) {
    return (
        <Placeholder
            instructions="Amazonや楽天市場、Yahoo!ショッピングのアフィリエイトリンクを綺麗にかんたんにまとめて表示。"
            label="通販商品リンク"
        >
            <div className="ec-links-editor-wrapper">
                <Flex>
                    <FlexBlock>
                        <TextControl
                            label="タイトルテキスト"
                            value={attributes.title}
                            onChange={(val) => setAttributes({ title: val })}
                        />
                    </FlexBlock>
                    <FlexItem>
                        <SelectControl
                            label="リンクのデザイン"
                            onChange={(val) => setAttributes({ skin: val })}
                            value={attributes.skin}
                            options={[
                                {
                                    disabled: true,
                                    label: 'リンクのデザインを選んでください。',
                                    value: ''
                                },
                                {
                                    label: 'デフォルト',
                                    value: 'default'
                                },
                                {
                                    label: 'シャドウ',
                                    value: 'shadow'
                                },
                                {
                                    label: 'ホワイト',
                                    value: 'white'
                                }
                            ]}
                        />
                    </FlexItem>
                </Flex>
                <TextControl
                    label="説明テキスト"
                    value={attributes.description}
                    onChange={(val) => setAttributes({ description: val })}
                />
                <TextareaControl
                    label="画像タグ（画像URLの入力可）"
                    value={attributes.image}
                    onChange={(val) => setAttributes({ image: val })}
                />
                <div>
                    {attributes.links.map((link, i) => <ECLink link={link} index={i} attributes={attributes} setAttributes={setAttributes} key={i} />)}
                </div>
                <Button variant="primary" onClick={() => setAttributes({ links: [...attributes.links, new Link()] })}>
                    {__("Add")}<Icon icon={plus} size={18} />
                </Button>
            </div>
        </Placeholder>
    );
}