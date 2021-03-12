import * as React from "react";
import Button from "@material-ui/core/Button/Button";
import Menu from "@material-ui/core/Button/Button";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";

class CurrencyProvider extends React.Component {

    render() {
        return (
            <div>
                <Button>
                    USD
                </Button>
                <Menu>
                    <MenuItem>
                        RUB
                    </MenuItem>
                    <MenuItem>
                        PLN
                    </MenuItem>
                </Menu>
            </div>
        )
    }
}

export default CurrencyProvider;