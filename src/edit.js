import Edit from "./components/editor/edit";
import Preview from "./components/editor/preview";

import { useContext, useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
/**
 * WordPress components that create the necessary UI elements for the block
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-components/
 */
import { Disabled, ToolbarGroup, ToolbarButton } from '@wordpress/components';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, BlockControls } from '@wordpress/block-editor';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Properties passed to the function.
 * @param {Object}   props.attributes    Available block attributes.
 * @param {Function} props.setAttributes Function that updates individual attributes.
 *
 * @return {WPElement} Element to render.
 */
export default function edit({ attributes, setAttributes, isSelected }) {
	const [isPreview, setIsPreview] = useState();
	const isDisabled = useContext(Disabled.Context);

	function switchToPreview() {
		setIsPreview(true);
	}

	function switchToHTML() {
		setIsPreview(false);
	}

	const blockProps = useBlockProps();
	return (
		<div {...blockProps}>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						className="components-tab-button"
						isPressed={!isPreview}
						onClick={switchToHTML}
					>
						{__('Edit')}
					</ToolbarButton>
					<ToolbarButton
						className="components-tab-button"
						isPressed={isPreview}
						onClick={switchToPreview}
					>
						{__('Preview')}
					</ToolbarButton>
				</ToolbarGroup>
			</BlockControls>
			{isPreview || isDisabled ? (
				<Preview isSelected={isSelected} attributes={attributes}/>
			) : (
				<Edit attributes={attributes} setAttributes={setAttributes} />
			)}
		</div>
	);
}
