import { useMemo } from '@wordpress/element';
import {
    transformStyles,
    store as blockEditorStore,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

import ECLinksBlock from '../block';

// Default styles used to unset some of the styles
// that might be inherited from the editor style.
const DEFAULT_STYLES = `
	html,body,:root {
		margin: 0 !important;
		padding: 0 !important;
		overflow: visible !important;
		min-height: auto !important;
	}
`;

export default function Preview({ attributes, isSelected }) {
    const settingStyles = useSelect((select) => {
        return select(blockEditorStore).getSettings()?.styles;
    }, []);

    const styles = useMemo(
        () => [DEFAULT_STYLES, ...transformStyles(settingStyles)],
        [settingStyles]
    );


    return (
        <>
            <ECLinksBlock attributes={attributes} className="ec-links-default-block-container" />
            { /*
				An overlay is added when the block is not selected in order to register click events.
				Some browsers do not bubble up the clicks from the sandboxed iframe, which makes it
				difficult to reselect the block.
			*/ }
            {!isSelected && (
                <div className="block-library-html__preview-overlay"></div>
            )}
        </>
    );
}