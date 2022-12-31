import { TextareaControl, SelectControl, CheckboxControl, Flex, FlexItem, FlexBlock, Button, Dashicon } from '@wordpress/components';
import { __ } from "@wordpress/i18n";

// 各通販サイトへのリンクコンポーネント
function ECLink({ link, index, attributes, setAttributes }) {
	// リンクタグの更新
	const handleTagChange = (val) => {
		const links = [...attributes.links];
		links[index].tag = val;
		setAttributes({ links });
	};
	// リンクの種類の更新
	const handleTypeChange = (val) => {
		const links = [...attributes.links];
		links[index].type = val;
		setAttributes({ links });
	}
	// 新しいタブで開くかどうかの更新
	const handleTabChange = (val) => {
		const links = [...attributes.links];
		links[index].newtab = val;
		setAttributes({ links });
	}
	return (
		<fieldset>
			<legend style={{ fontSize: "11px" }}>{`商品リンクタグ${index + 1}（リンクURLの入力可）`}</legend>
			<Flex>
				<FlexBlock>
					<TextareaControl
						value={link.tag}
						onChange={handleTagChange}
						className={link.type}
					/>
				</FlexBlock>
				<FlexItem>
					<SelectControl
						onChange={handleTypeChange}
						value={link.type}
						options={[
							{
								disabled: true,
								label: 'リンクの種類を選んでください。',
								value: ''
							},
							{
								label: 'Amazon',
								value: 'ec-amazon'
							},
							{
								label: '楽天市場',
								value: 'ec-rakuten'
							},
							{
								label: 'Yahoo!ショッピング',
								value: 'ec-yahoo'
							},
							{
								label: "カスタム",
								value: 'ec-custom'
							}
						]}
					/>
					<CheckboxControl
						label="新しいタブで開く"
						checked={link.newtab}
						onChange={handleTabChange}
						className="ec-links-inline-block"
					/>
					<Button className="ec-links-inline-block" label={__("Remove")} onClick={() => setAttributes({ links: attributes.links.filter((l, i) => i !== index) })}>
						<Dashicon icon="no-alt" />&nbsp;{__("Remove")}
					</Button>
				</FlexItem>
			</Flex>
		</fieldset>
	);
}

export default ECLink;