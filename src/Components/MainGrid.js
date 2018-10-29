import React, { Component } from 'react';

export class MainGrid extends Component {
    render() {
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-3 text-center">
                        PROFILE INFORMATION
                    </div>
                    <div class="col-sm-7 text-center">
                        FRIENDS
                    </div>
                    <div class="col-sm-2 text-center">
                        RECOMMENDATIONS
                    </div>
                </div>
            </div>
        );

    }
}