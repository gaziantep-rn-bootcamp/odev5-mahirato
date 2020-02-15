import { StyleSheet } from 'react-native';
import helperC from '../controllers/helperC';
import anasayfaC from '../controllers/anasayfaC';

const splashS = StyleSheet.create({
    kapsayici: {
        flex: 1,
        backgroundColor: 'rgba(33,38,44,1)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    whIkon: {
        position: 'absolute',
        top: helperC.h * 0.3
    },


    fromFacebook: {
        position: 'absolute',
        bottom: 20
    }
});


const ustBarS = StyleSheet.create({
    ustBar: {
        backgroundColor: '#075e55',
        width: helperC.w,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center'
    },
    ustBarSagIkonlar: {
        position: 'absolute',
        right: 8,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    ustBar3Nokta: {
        marginLeft: 5
    }
});


const isimlerAlaniS = StyleSheet.create({
    isimlerAlani: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#075e55',
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 20
    },
    isimYazi: {
        color: 'rgba(255,255,255,0.3)',
        fontWeight: 'bold',
    },
    isimYaziAktif: {
        color: 'white',
        fontWeight: 'bold',
    },
    isimlerAlaniKameraIkon: {
        position: 'absolute',
        left: 8
    }
});


const anasayfaS = () => StyleSheet.create({
    kapsayici: {
        flex: 1
    },
    pagesContainerStyle: {
        flex: 1
    },
    govde: {
        flex: 1
    },

    yeniMesajIkon: {
        position: 'absolute',
        right: anasayfaC.tmp ? undefined : 10,
        left: anasayfaC.tmp ? 10 : undefined,
        bottom: 10
    }
});


const mesajlasmaS = StyleSheet.create({
    kapsayici: {
        flexDirection: 'row',
        height: helperC.h * 0.12,
        borderColor: 'red'
    },
    profilResmi: {
        alignSelf: 'center',
        marginLeft: 5,
        aspectRatio: 1,
        borderRadius: helperC.w * 0.6,
        overflow: 'hidden'
    },


    sagdakiAlan: {
        borderColor: 'blue',
        flex: 1,
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 15,
        borderBottomWidth: 0.7,
        borderBottomColor: 'rgba(0,0,0,0.2)'
    },

    baslikAlani: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    mesajBaslik: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18
    },
    tarih: {
        fontSize: 13,
        color: 'rgba(0,0,0,0.75)',
        textAlign: 'right',
        right: 0
    },
    sonMesajYazi: {
        color: 'rgba(0,0,0,0.75)',
        paddingTop: 0,
        fontSize: 16
    }
});

export { splashS, anasayfaS, ustBarS, isimlerAlaniS, mesajlasmaS };
