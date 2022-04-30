import { StyleSheet } from "react-native";
import { colors, size, screenHeight, screenWidth, normalize } from "../../components/Utils";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.butterscotch
    },
    header: {
        height: normalize(90),
        paddingTop: size.xxx_medium,
        top: size.xx_tiny,
        position: 'relative',
        backgroundColor: colors.indian_yellow
    },
    textfield: {
        paddingBottom: size.tiny,
        fontSize: size.xx_small,
        borderRadius: size.tiny,
        backgroundColor: colors.white,
    },
    isfocused: {
        width: screenWidth - 100,
        alignSelf: 'flex-start',
        marginLeft: size.normal,
        paddingLeft: size.normal
    },
    notIsFocused: {
        width: screenWidth - 40,
        alignSelf: 'center',
        marginLeft: 0,
        paddingLeft: 0
    },
    headerCancel: {
        alignSelf: 'flex-end',
        paddingRight: size.xxx_small,
        bottom: size.normal
    },
    focusedCancelImage: {
        alignSelf: 'flex-end',
        paddingRight: size.xx_big + size.tiny,
        bottom: size.xx_medium
    },
    CancelImage: {
        alignSelf: 'center',
        paddingRight: size.xx_big + size.tiny,
        bottom: size.normal
    },
    placeholder: {
        alignSelf: 'center',
        bottom: size.normal
    },
    focusHeaderSearch: {
        alignSelf: 'flex-start',
        paddingLeft: size.x_normal,
        paddingRight: size.xx_big,
    },
    HeaderSearch: {
        alignSelf: 'center',
        paddingLeft: 0,
        paddingRight: size.xx_big,
    }




})
export default styles;