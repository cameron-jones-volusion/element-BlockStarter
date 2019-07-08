import { defaultConfig } from './blockConfig';

export const StarterBlockFactory = React => {
    function StarterBlock(props) {
        return <h1>{props.text}</h1>;
    }
    StarterBlock.defaultProps = defaultConfig;
    return StarterBlock;
};
