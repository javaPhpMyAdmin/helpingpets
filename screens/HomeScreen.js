import { Text, View, SafeAreaView, StyleSheet, StatusBar, Dimensions, FlatList, Image, TouchableOpacity, Platform } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

const { width, height } = Dimensions.get('screen')

const DATA = [
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
		title: 'First Itemasddasdasdnasjndsadnasjmdnasmdnasmdnasmdnasmdasndmsandsamdnasmdnasmnasdasdasdasdasdasdasdasdasdasdasdasdasdas',
		image: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/01/09142320/Perros-callejeros-mexico-3.jpg',
		lat: '',
		long: '',
		pictureOwner: 'chelobat@gmail.com'
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
		title: 'Second Itemasadasdasdasdasdasdasdasdasd',
		image: 'https://cdn2.salud180.com/sites/default/files/field/image/2021/07/enfermedades-perritos-callejeros-principal.jpg',
		lat: '',
		long: '',
		pictureOwner: 'chelobat@gmail.com'
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d333372',
		title: 'Third Itemasdasdasdasdasdasdasdasdasdasd',
		image: 'https://estaticos.muyinteresante.es/media/cache/400x300_thumb/uploads/images/article/5cbf27e45bafe8e7563c986a/gatitos-abandonados-calle.jpg',
		lat: '',
		long: '',
		pictureOwner: 'chelobat@gmail.com'
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d72',
		title: 'Fourth Item asdasdasdasdasdasdasdasdasdasdas',
		image: 'https://vetmarketportal.com.ar/uploads/noticias/2/20201028235310_perro_abandonado.jpg',
		lat: '',
		long: '',
		pictureOwner: 'chelobat@gmail.com'
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d72232',
		title: 'fivest Itemasdassdasdasdasdasdasdasdasdasdasdasas',
		image: 'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/2021-05/5-formas-de-ayudar-a-los-gatos-y-perros-callejeros-p.png?itok=j0cNJc3L',
		lat: '',
		long: '',
		pictureOwner: 'chelobat@gmail.com'
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29sssd72232',
		title: 'LAST Itemasdasdasdasdasdasdasdasdasdasdasdasdasdasdas',
		image: 'https://gatosphera.com/wp-content/uploads/2014/01/gatos-calle-1.jpg',
		lat: '',
		long: '',
		pictureOwner: 'chelobat@gmail.com'
	}
];

const HomeScreen = () => {
	const navigation = useNavigation();
	return (
		<>
			<StatusBar style={{ color: 'yellow' }} />
			<SafeAreaView style={styles.safeAreaContainer}>
				<View style={styles.headerContainer}>
					<View style={styles.containerTitle}>
						<Text style={styles.headerTitle}>
							ÚLTIMOS REGISTROS
						</Text>
					</View>
				</View>
				<View
					style={styles.flatListContainer}
				>
					<FlatList
						style={{ width: width - 10 }}
						showsVerticalScrollIndicator={false}
						data={DATA}
						renderItem={({ item }) => {
							return (

								<View style={styles.itemContainer}>
									<Image
										style={{ width: width - 25, height: height - 662, borderRadius: 19, marginTop: 0 }}
										source={{ uri: item.image }}
										resizeMode='cover'
									/>
									<View style={styles.iconPictureContainer}>
										<TouchableOpacity>
											<Icon name='arrow-right' type='font-awesome' size={45} color='black' />
										</TouchableOpacity>
									</View>
									<View style={styles.itemDetailsContainer}>
										<View>
											<Text numberOfLines={1} style={styles.itemTitle}>{(item.title.length) > 20 ? `${item.title.substring(0, 30)}...` : item.title}</Text>
											<Text style={styles.itemUser}>{item.pictureOwner}</Text>
										</View>
										<TouchableOpacity onPress={() => null}>
											<View style={styles.mapIconContainer}>
												<Icon name='map-marker' type='font-awesome' size={42} color='red' />
											</View>
										</TouchableOpacity>
									</View>
								</View>
							)
						}}
						keyExtractor={item => item.id}
					/>
				</View>
				<View style={styles.lastView}>
					<View>
						<TouchableOpacity style={styles.addButtonContainer} onPress={() => navigation.navigate('NewMarker')}>
							<Text style={{ padding: 5, fontSize: 15, fontWeight: 'bold', fontStyle: 'italic', color: 'white' }}>AGREGAR NUEVO REGISTRO</Text>
							<View style={{ paddingBottom: 1, paddingLeft: 10 }}>
								<Icon name='plus-circle' type='font-awesome' size={37} color='white' />
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</SafeAreaView>
		</>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	safeAreaContainer: {
		flex: 1,
		backgroundColor: '#rgb(255, 255, 255)',
		width: '100%',
		height: '100%',
		alignItems: 'center',
	},
	headerContainer: {
		flexDirection: 'row',
		shadowColor: 'black',
		shadowRadius: 10,
		shadowOffset: { width: -10, height: -10 },
		elevation: 10,
		shadowOpacity: 1,
		width: '95%',
		overflow: 'hidden',
		height: 40,
		borderRadius: 15,
		backgroundColor: '#rgb(255, 255, 255)',
		alignItems: 'center',
		justifyContent: 'center',
		top: 10,
		borderColor: 'yellow',
		borderWidth: 0.5
	},
	flatListContainer: {
		width: width/*width - 5*/,
		top: 20,
		height: height - 205,
		backgroundColor: '#rgb(255, 255, 255)',
		alignItems: 'center',
		paddingBottom: 0
	},
	containerTitle: {
		height: 30,
		width: '80%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerTitle: {
		fontWeight: 'bold',
		fontSize: 20,
		fontStyle: 'italic',
		letterSpacing: 2.5
	},
	itemContainer: {
		left: 5,
		width: width - 20,
		height: height - 620,
		borderColor: 'yellow',
		borderWidth: 0.5,
		borderRadius: 20,
		marginVertical: 15,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',
		shadowColor: 'black',
		shadowRadius: 6,
		shadowOffset: { width: 6, height: 6 },
		elevation: Platform.OS === 'ios' ? null : 8,
		shadowOpacity: 1,
	},
	lastView: {
		position: 'absolute',
		width: '95%',
		height: height / 16,
		top: height - 140,
		alignItems: 'center',
		justifyContent: 'center'
	},
	itemTitle: {
		left: 10,
		fontSize: 18,
		fontWeight: 'bold',
		fontStyle: 'italic',
	},
	itemUser: {
		left: 10,
		paddingBottom: 10,
		fontWeight: 'bold',
		fontSize: 17,
		color: 'black'
	},
	itemDetailsContainer: {
		paddingHorizontal: 10,
		paddingVertical: 0,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	mapIconContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		right: 10,
		bottom: 5
	},
	iconPictureContainer: {
		width: 50,
		height: 50,
		position: 'absolute',
		right: 4,
		top: 0,
		borderRadius: 50 / 2,
		backgroundColor: 'white'
	},
	addButtonContainer: {
		marginTop: 1,
		marginBottom: 5,
		width: '80%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 5,
		borderColor: 'yellow',
		borderWidth: 1,
		borderRadius: 20,
		backgroundColor: 'gray',
		shadowColor: 'black',
		shadowRadius: 6,
		shadowOffset: { width: 6, height: 6 },
		elevation: Platform.OS === 'ios' ? null : 6,
		shadowOpacity: 1,
	}
})
