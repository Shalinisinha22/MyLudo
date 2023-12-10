import React from 'react';
import {View,StyleSheet, TouchableOpacity} from 'react-native';
import { colors } from '../../util/Colors';
import { HOME } from '../../util/Constants';
import RedGoti from '../Goti/RedGoti';
import BlueGoti from '../Goti/BlueGoti';
import YellowGoti from '../Goti/YellowGoti';
import GreenGoti from '../Goti/GreenGoti';
export default PlayerBox = ({color,customStyle,one,two,three,four,onPieceSelection,animateForSelection}) =>{

    const [isAnimating,setIsAnimating] = React.useState(false);
    const [backgroundColor,setBackgroundColor] = React.useState(color);
    const [intervalId,setIntervalId] = React.useState(undefined);
    let shouldRenderBackgroundColor = 1;
    const applyAnimationIfNeeded = () =>{
        if(animateForSelection){
            if(!isAnimating){
                setIsAnimating(true);
                setIntervalId(setInterval(()=>{
                    shouldRenderBackgroundColor++;
                    shouldRenderBackgroundColor%2==0?setBackgroundColor(color):setBackgroundColor(colors.white);
                },400));
            }
        }else{
            clearInterval(intervalId);
            if(isAnimating){
                setIsAnimating(false);
                setBackgroundColor(color);
            }
        }
        
    }
    const renderPiece = (piece) =>{
        if(piece.position==HOME){
            return(
                <TouchableOpacity style={{flex:1}} onPress={()=>{onPieceSelection(piece)}}>
                <View style={[styles.pieceStyle,{backgroundColor:backgroundColor,borderRadius:20}]}>
                   
                      {backgroundColor == "#ec1d27" && <RedGoti></RedGoti>}
                      {backgroundColor == "#01A147" && <GreenGoti></GreenGoti>}
                      {backgroundColor == "#ffe01b" && <YellowGoti></YellowGoti>}
                      {backgroundColor == "#29b6f6" && <BlueGoti></BlueGoti>}
                    </View>
                </TouchableOpacity>
            );
        }
        return(
            <TouchableOpacity style={{flex:1}}>
            <View style={[styles.pieceStyle,{backgroundColor:backgroundColor}]}>

            </View>
            </TouchableOpacity>
        );
    }
    applyAnimationIfNeeded();
    return(
      

        <View style={[{backgroundColor:color,flex:4},customStyle]}>
            <View style={styles.innerContainer}>
            <View style={styles.piecesContainer}>
            {renderPiece(one)}
            {renderPiece(two)}
            </View>
            <View style={styles.piecesContainer}>
            {renderPiece(three)}
            {renderPiece(four)}
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    innerContainer:{
        flex:1,
        backgroundColor:'#fff',
        margin:30,
        // borderRadius:20
    },
    piecesContainer:{
        flexDirection:'row',
        flex:1
    },
    pieceStyle:{
        flex:1,
        margin:10,
        borderRadius:20,
        borderWidth:0,
        borderColor: "#000"
    }
})