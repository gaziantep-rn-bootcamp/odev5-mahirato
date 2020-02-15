import { observable, action, decorate } from 'mobx';
import database from '@react-native-firebase/database'; //firebase realtime-database için import
import { AsyncStorage } from 'react-native';
import axios from 'axios';
import helperC from './helperC';

class anasayfaC {
	baslangic = async () => {
		//await AsyncStorage.setItem('telefonNumaram', '905111111111');

		/*
		AsyncStorage.getItem('telefonNumaram')
			.then(d => {
				if (d) {
					helperC.setTelefonNumaram(d);
					this.splashKapat();
					this.getirMesajlasmalar();
				}
				else alert('telefon numaran kayıtlı değil!');
			})
			.catch(e => {
				alert('hata: telefon numaran kayıtlı değil!');
			});
			*/

		helperC.setTelefonNumaram(await AsyncStorage.getItem('telefonNumaram'));
		this.splashKapat();
		this.getirMesajlasmalar();
	}

	splashGoster = true;
	splashKapat = () => (setTimeout(() => (this.splashGoster = false), 750));


	sayfa = 0;
	sayfaDegisti = d => (this.sayfa = d);

	anasayfaPagesRef = null;
	setAnasayfaPagesRef = d => (this.anasayfaPagesRef = d);
	sayfayaGit = d => (this.anasayfaPagesRef.scrollToPage(d));


	mesajlasmalar = [];
	getirMesajlasmalar = async () => {
		database()
			.ref(`/sohbetler/${helperC.telefonNumaram}`)
			.on(
				'value',
				d1 => {
					const data1 = d1.val();
					console.log('nurettin-data1', data1);

					for (let i = 0; i < data1.length; i++) {
						console.log(`nurettin-data1[${i}]`, data1[i]);

						database()
							.ref(`/kullaniciDetay/${data1[i].kimle}`)
							.on(
								'value',
								d2 => {
									const data2 = d2.val();
									console.log('nurettin-data2', data2);

									let kontrol = true;

									for (let j = 0; j < this.mesajlasmalar.length; j++) {
										if (this.mesajlasmalar[j].sohbetId === data1[i].sohbetId) {
											kontrol = false;

											const tmp = this.mesajlasmalar;
											tmp[j] = {
												sohbetId: data1[i].sohbetId,
												profil: data2.profil,
												baslik: `${data2.ad} ${data2.soyad}`,
												sonMesaj: '-',
												tarih: '-',
											};
											this.mesajlasmalar = tmp;
										}
									}

									if (this.mesajlasmalar.length === 0 || kontrol) {
										const tmp = this.mesajlasmalar;

										tmp.push({
											sohbetId: data1[i].sohbetId,
											profil: data2.profil,
											baslik: `${data2.ad} ${data2.soyad}`,
											sonMesaj: '-',
											tarih: '-',
										});

										this.mesajlasmalar = tmp;
									}
								}
							);
					}
				}
			);
	}


	tmp = false;
	setTmp = () => (this.tmp = !this.tmp);
}

decorate(
	anasayfaC,
	{
		baslangic: action,

		promisefonksiyon: action,


		splashGoster: observable,
		splashKapat: action,


		sayfa: observable,
		sayfaDegisti: action,

		anasayfaPagesRef: observable,
		setAnasayfaPagesRef: action,
		sayfayaGit: action,

		mesajlasmalar: observable,
		getirMesajlasmalar: action,

		tmp: observable,
		setTmp: action
	}
);

export default new anasayfaC();
