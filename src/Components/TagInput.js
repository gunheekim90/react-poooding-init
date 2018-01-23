import React from 'react';
import { WithContext as ReactTags } from 'react-tag-input';
import styles from './styles.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
 
class TagInput extends React.Component {
    constructor(props) {
        super(props);
 
        this.state = {
            tags: [],
            suggestions: ["Spring","Javascript"]
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
    }
 
    handleDelete(i) {
        let tags = this.state.tags;
        tags.splice(i, 1);
        this.setState({tags: tags});
    }
 
    handleAddition(tag) {
        let tags = this.state.tags;
        tags.push({
            id: tags.length + 1,
            text: tag
        });
        this.setState({tags: tags});
    }
 
    handleDrag(tag, currPos, newPos) {
        let tags = this.state.tags;
 
        // mutate array 
        tags.splice(currPos, 1);
        tags.splice(newPos, 0, tag);
 
        // re-render 
        this.setState({ tags: tags });
    }
 
    render() {
        const { tags, suggestions } = this.state;
        return (
            <div>
                <ReactTags 
                    tags={tags}
                    suggestions={suggestions}
                    handleDelete={this.handleDelete}
                    handleAddition={this.handleAddition}
                    handleDrag={this.handleDrag} />
            </div>
        )
    }
};

export default TagInput;