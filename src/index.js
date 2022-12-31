/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor. All other files
 * get applied to the editor only.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';
import './editor.scss';

/**
 * Internal dependencies
 */
import edit from './edit';
import save from './save';
import metadata from './block.json';

/* プレビュー用商品画像タグ */
const image = '<img src="data:image/jpeg;base64,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">';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType( metadata.name, {
	/**
	 * Used to construct a preview for the block to be shown in the block inserter.
	 */
	example: {
		attributes: {
			title: 'Macbook Air 13.3インチ [スペースグレイ]',
			description: "M1チップ採用。13.3型Retinaディスプレイ。",
			image,
			skin: "default",
			links: [
				{
					tag: "<a href=\"#\">Amazon</a>",
					type: "ec-amazon",
					newtab: false 
				},
				{
					tag: "<a href=\"#\">楽天市場</a>",
					type: "ec-rakuten",
					newtab: false 
				}
			]
		},
	},
	/**
	 * @see ./edit.js
	 */
	edit,

	/**
	 * @see ./save.js
	 */
	save,
} );
