import React, { Component } from "react";
import { Button, ActivityIndicator, View, TouchableHighlightBase } from "react-native";
import { styles } from "./styles";
import * as ctrl from "./controller";
import { withNavigation, NavigationScreenProp, withNavigationFocus } from "react-navigation";

export interface UploadButtonProps {
  navigation: NavigationScreenProp<any, any>;
}

export interface States {
  loading: boolean;
}

export class UploadButton extends Component<UploadButtonProps, States> {
  constructor(props: UploadButtonProps) {
    super(props);
		this.state = {loading: false}
	}

	setLoadingFalse() {
		this.setState({ loading: false });
	}
	
  render() {
    if (this.state.loading) {
			return(
				<ActivityIndicator size="large" color="#0000ff" />
			)
    }
    return (
      <Button
        title="Upload File"
        onPress={() => { ctrl.uploadFile(this.props.navigation).then(() => this.setLoadingFalse()); this.setState({ loading: true}) } }
      />
    );
  }
}

export default withNavigation(UploadButton);
