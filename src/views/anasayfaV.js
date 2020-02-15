import React from 'react';
import { View, FlatList, LayoutAnimation, UIManager, Text, StatusBar, TouchableOpacity, AsyncStorage } from 'react-native';
import { observer } from 'mobx-react';
import SImage from 'react-native-scalable-image';
import { Pages } from 'react-native-pages';
import CodePush from 'react-native-code-push';
import * as Animasyon from 'react-native-animatable';


import { anasayfaS, splashS, ustBarS, isimlerAlaniS, mesajlasmaS } from '../styles/anasayfaS';


import helperC from '../controllers/helperC';
import anasayfaC from '../controllers/anasayfaC';

UIManager.setLayoutAnimationEnabledExperimental(true);

class anasayfaV extends React.Component {
	componentDidMount = async () => {
		anasayfaC.baslangic();
	}

	componentDidUpdate() {
		LayoutAnimation.easeInEaseOut();
	}


	renderSplashEkrani() {
		return (
			<View style={splashS.kapsayici}>
				<StatusBar backgroundColor={'rgba(33,38,44,1)'} />

				<SImage source={require('../images/splash2.png')} width={helperC.w * 0.18} style={splashS.whIkon} />
				<SImage source={require('../images/splash1.png')} width={helperC.w * 0.3} style={splashS.fromFacebook} />
			</View>
		);
	}


	//#region ÜST ALAN 
	renderUstBar() {
		return (
			<View style={ustBarS.ustBar}>
				<SImage source={require('../images/whatsapp.png')} width={helperC.w * 0.3} />

				<View style={ustBarS.ustBarSagIkonlar}>
					<TouchableOpacity style={ustBarS.ustArama}>
						<SImage source={require('../images/arama.png')} height={40} />
					</TouchableOpacity>

					<TouchableOpacity style={ustBarS.ustBar3Nokta}>
						<SImage source={require('../images/3nokta.png')} height={32} />
					</TouchableOpacity>
				</View>
			</View>
		);
	}
	renderSayfaIsimleri() {
		return (
			<View style={isimlerAlaniS.isimlerAlani}>
				<SImage source={require('../images/kameraIkon.png')} height={20} style={isimlerAlaniS.isimlerAlaniKameraIkon} />
				<Text
					onPress={() => { anasayfaC.sayfayaGit(0); }}
					style={[isimlerAlaniS.isimYazi, anasayfaC.sayfa === 0 && isimlerAlaniS.isimYaziAktif]}
				>
					SOHBETLER
				</Text>
				<Text
					onPress={() => anasayfaC.sayfayaGit(1)}
					style={[isimlerAlaniS.isimYazi, anasayfaC.sayfa === 1 && isimlerAlaniS.isimYaziAktif]}
				>
					DURUM
				</Text>
				<Text
					onPress={() => anasayfaC.sayfayaGit(2)}
					style={[isimlerAlaniS.isimYazi, anasayfaC.sayfa === 2 && isimlerAlaniS.isimYaziAktif]}
				>
					ARAMALAR
				</Text>
			</View>
		);
	}
	//#endregion


	//#region SEKMELER 
	renderSOHBETLER() {
		return (
			<View style={anasayfaS.govde}>
				<FlatList
					data={anasayfaC.mesajlasmalar}
					renderItem={d => this.renderMesajlasma(d.item)}
				/>
			</View>
		);
	}
	renderDURUM() {
		return (
			<View style={anasayfaS.govde}>
				<Text>renderDURUM</Text>
			</View>
		);
	}
	renderARAMALAR() {
		return (
			<View style={anasayfaS.govde}>
				<Text>renderARAMALAR</Text>
			</View>
		);
	}
	//#endregion


	renderMesajlasma(d) {
		return (
			<Animasyon.View animation={'flipInX'} style={mesajlasmaS.kapsayici}>
				<SImage
					width={helperC.w * 0.12}
					source={{ uri: d.profil }}
					style={mesajlasmaS.profilResmi}
				/>

				<TouchableOpacity
					style={mesajlasmaS.sagdakiAlan}
					onPress={() => this.props.navigation.navigate('mesajlasma')}
				>
					<View style={mesajlasmaS.baslikAlani}>
						<Text numberOfLines={1} style={mesajlasmaS.mesajBaslik}>{d.baslik}</Text>
						<Text style={mesajlasmaS.tarih}>{d.tarih}</Text>
					</View>
					<Text numberOfLines={1} style={mesajlasmaS.sonMesajYazi}>{d.sonMesaj}</Text>
				</TouchableOpacity>
			</Animasyon.View>
		);
	}


	render() {
		if (anasayfaC.splashGoster) return this.renderSplashEkrani();
		this.anasayfaS = anasayfaS();

		return (
			<View style={this.anasayfaS.kapsayici}>
				<StatusBar backgroundColor={'#054c44'} />
				<Text>TEST</Text>
				<Text>TEST</Text>
				<Text>TEST</Text>
				<Text>TEST</Text>
				<Text>TEST</Text>
				<Text>TEST</Text>

				{this.renderUstBar()}
				{this.renderSayfaIsimleri()}


				<Pages
					ref={anasayfaC.setAnasayfaPagesRef} //this.refs.anasayfaPages
					//ref={anasayfaC.setAnasayfaPagesRef()} //this.anasayfaPages
					indicatorColor={'transparent'}
					onScrollEnd={anasayfaC.sayfaDegisti}
					containerStyle={anasayfaS.pagesContainerStyle}
				>
					{this.renderSOHBETLER()}
					{this.renderDURUM()}
					{this.renderARAMALAR()}
				</Pages>


				<TouchableOpacity
					style={this.anasayfaS.yeniMesajIkon}
					onPress={anasayfaC.setTmp}
				/*onPress={() => CodePush.sync({
					updateDialog: false,
					installMode: CodePush.InstallMode.IMMEDIATE
				})}*/
				>
					<Text>{anasayfaC.tmp.toString()}</Text>
					<SImage source={require('../images/yeniMesaj.png')} width={helperC.w * 0.12} />
				</TouchableOpacity>
			</View>
		);
	}
}

export default observer(anasayfaV);
