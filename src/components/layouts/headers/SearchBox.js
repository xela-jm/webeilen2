import React, {Component} from 'react';
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";

class SearchBox extends Component {
    render() {
        return (
            <div>
                <Input
                    fullWidth
                    placeholder="Search and hit enter"
                    disableUnderline
                />
            </div>
        )
    }

}

export default SearchBox;