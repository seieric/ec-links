<?php
/**
 * Plugin Name:       EC Links Basic（通販商品リンク）
 * Description:       Amazonや楽天市場、Yahoo!ショッピングのアフィリエイトリンクを綺麗にかんたんにまとめて表示できるカスタムブロックを追加。ASPで取得したアフィリエイトリンクをそのまま貼り付けるだけで、綺麗なボタンのリンクが作れます。
 * Version:           0.1.0
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Author:            seieric
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ec-links
 *
 * @package           ec-links
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function ec_links_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'ec_links_init' );