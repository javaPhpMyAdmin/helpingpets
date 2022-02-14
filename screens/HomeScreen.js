import { Text, View, SafeAreaView, StyleSheet, Dimensions, Image, TouchableOpacity, Platform, Animated } from 'react-native';
import React, { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { SharedElement } from 'react-navigation-shared-element';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

// console.log(StatusBarHeight);

const { width, height } = Dimensions.get('screen')
const TOP = `${Platform.OS === 'ios' ? (height / 200) : (height / 200)}%`
const HEIGHT_IMAGE_POR = width - 99
const MARGIN_VERTICAL = 15
const DATA = [
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
		title: 'First Itemasddasdasdnasjndsadnasjmdnasmdnasmdnasmdnasmdasndmsandsamdnasmdnasmnasdasdasdasdasdasdasdasdasdasdasdasdasdas',
		images: [
			{
				id: 'asdaswerr',
				uri: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/01/09142320/Perros-callejeros-mexico-3.jpg'
			},
			{
				id: 'asdasdawwwwww',
				uri: 'https://elcomercio.pe/resizer/o1iGvdjwZ7uyfm32ap0mZqVyY4Q=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/JJIAPKY5HFEI5DFMOGVYNXCBCE.jpg'
			},
			{
				id: 'wewewewewewe',
				uri: 'https://cdn.bioguia.com/embed/bd4b2ce0a58ab8240dde2dc7f43c31b61524336236/Holanda_se_convierte_en_el_primer_pais_sin_perros_abandonados_sin_sacrificarlos?imagick=1&size=500'
			}
		],
		lat: '',
		long: '',
		userEmail: 'chelobat@gmail.com',
		createdAt: '10-12-2021'
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
		title: 'Perrita abandonada en zona la comercial',
		images:
			[
				{
					id: 'wewe3333',
					uri: 'https://cdn2.salud180.com/sites/default/files/field/image/2021/07/enfermedades-perritos-callejeros-principal.jpg'
				},
				{
					id: '22222222',
					uri: 'https://www.ayayay.tv/wp-content/uploads/2016/07/portada-perrocallejero.jpg'
				},
				{
					id: 'jsdskjadjaks',
					uri: 'https://depor.com/resizer/co7DeTR7_4PxAxRe2k6AvY9VAyU=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/4JDN7I76QVGCNGTOG73J53XHNE.jpg'
				}
			],
		lat: '',
		long: '',
		userEmail: 'chelobat@gmail.com',
		createdAt: '12-12-2021'
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d333372',
		title: 'Gatitos abandonados en Cordon',
		images: [
			{
				id: 'asdasdasd',
				uri: 'https://estaticos.muyinteresante.es/media/cache/400x300_thumb/uploads/images/article/5cbf27e45bafe8e7563c986a/gatitos-abandonados-calle.jpg'
			},
			{
				id: 'adasdas',
				uri: 'https://soyungato.com/wp-content/uploads/2020/04/minino-abandonado.jpg'
			},
			{
				id: 'aadasdasdasdas',
				uri: 'https://img.huffingtonpost.com/asset/5c8b62212500000d04ca87a5.jpeg?ops=scalefit_630_noupscale'
			}
		],
		lat: '',
		long: '',
		userEmail: 'chelobat@gmail.com',
		createdAt: '12-01-2022'
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d72',
		title: 'Fourth Item asdasdasdasdasdasdasdasdasdasdas',
		images: [
			{
				id: '33333333',
				uri: 'https://vetmarketportal.com.ar/uploads/noticias/2/20201028235310_perro_abandonado.jpg'
			},
			{
				id: '232424242',
				uri: 'https://d8s293fyljwh4.cloudfront.net/petitions/images/165844/horizontal/calle.jpg?1472046270'
			},
			{
				id: '23232323232111',
				uri: 'https://noticiasambientales.com/wp-content/uploads/2019/11/holanda_animales_callejeros_4865864584658465864584.jpg'
			}
		],
		lat: '',
		long: '',
		userEmail: 'chelobat@gmail.com',
		createdAt: '03-12-2021'
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d72232',
		title: 'fivest Itemasdassdasdasdasdasdasdasdasdasdasdasas',
		images: [
			{
				id: '3434343534',
				uri: 'https://st4.depositphotos.com/1010683/20321/i/600/depositphotos_203218232-stock-photo-woman-hand-touching-on-street.jpg'
			},
			{
				id: 'askdkasjdaskjdasdas',
				uri: 'https://www.zoorprendente.com/wp-content/uploads/2019/12/kenya-1-2-750x750.jpg'
			},
			{
				id: '383h593933hj93',
				uri: 'https://1.bp.blogspot.com/-3IEFiJlxR4I/XYP1ucC2k6I/AAAAAAAASQ8/-M8H36pmJEEznraZIy8KCOvxzkCAOpjVACLcBGAsYHQ/s1600/Gato%2Babandonado%2Ben%2Bla%2Besquina%2Bde%2Bla%2Bcalle%2Bcon%2Bsus%2Bcosas.jpg'
			}
		],
		lat: '',
		long: '',
		userEmail: 'chelobat@gmail.com',
		createdAt: '04-02-2022'
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29sssd72232',
		title: 'LAST Itemasdasdasdasdasdasdasdasdasdasdasdasdasdasdas',
		images: [

			{
				id: '3i333h3h3h',
				uri: 'https://www.lavoz.com.ar/resizer/yTPjAhgCdtnrR3uTUvQenl4xPvE=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/PMQZYSEPNNENJCXH6QQ42IJIGM.jpg'
			},
			{
				id: 'asdajshdasdas',
				uri: 'https://www.lavoz.com.ar/resizer/_DMSW2KznJdzrY_aC7itb9Uxkr4=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/6FES2YE25RCJZGHWK6NCSYTQHY.jpg'
			}
			,
			{
				id: '2nasd333',
				uri: 'https://www.ecestaticos.com/imagestatic/clipping/6d7/8b3/6d78b30ed2aa5a4d15513d5734114f1e/el-dueno-de-un-perro-lo-tiene-abandonado-y-sus-vecinos-le-construyen-una-caseta.jpg?mtime=1622465635'
			}],
		lat: '',
		long: '',
		userEmail: 'chelobat@gmail.com',
		createdAt: '10-01-2022'
	},
	{
		id: '58694a0f-3daqwqwqwq1-471f-bd96-145571e29sssd72232',
		title: 'LAST Itemasdasdasdasdasdasdasdasdasdasdasdasdasdasdas',
		images: [

			{
				id: '3i333hqwqwqwqw3h3h',
				uri: 'https://www.lavoz.com.ar/resizer/yTPjAhgCdtnrR3uTUvQenl4xPvE=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/PMQZYSEPNNENJCXH6QQ42IJIGM.jpg'
			},
			{
				id: 'asdajsqqqqqhdasdas',
				uri: 'https://www.lavoz.com.ar/resizer/_DMSW2KznJdzrY_aC7itb9Uxkr4=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/6FES2YE25RCJZGHWK6NCSYTQHY.jpg'
			}
			,
			{
				id: '2naqwqwqwsd333',
				uri: 'https://www.ecestaticos.com/imagestatic/clipping/6d7/8b3/6d78b30ed2aa5a4d15513d5734114f1e/el-dueno-de-un-perro-lo-tiene-abandonado-y-sus-vecinos-le-construyen-una-caseta.jpg?mtime=1622465635'
			}],
		lat: '',
		long: '',
		userEmail: 'chelobat@gmail.com',
		createdAt: '10-01-2022'
	},
	{
		id: '58694a0qwqwqwqwf-3da1-471f-bd96-145571e29sssd72232',
		title: 'LAST Itemasdasdasdasdasdasdasdasdasdasdasdasdasdasdas',
		images: [

			{
				id: '3i3qqwqwq33h3h3h',
				uri: 'https://www.lavoz.com.ar/resizer/yTPjAhgCdtnrR3uTUvQenl4xPvE=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/PMQZYSEPNNENJCXH6QQ42IJIGM.jpg'
			},
			{
				id: 'asdajsddsdwwwhdasdas',
				uri: 'https://www.lavoz.com.ar/resizer/_DMSW2KznJdzrY_aC7itb9Uxkr4=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/6FES2YE25RCJZGHWK6NCSYTQHY.jpg'
			}
			,
			{
				id: '2nassdssssd333',
				uri: 'https://www.ecestaticos.com/imagestatic/clipping/6d7/8b3/6d78b30ed2aa5a4d15513d5734114f1e/el-dueno-de-un-perro-lo-tiene-abandonado-y-sus-vecinos-le-construyen-una-caseta.jpg?mtime=1622465635'
			}],
		lat: '',
		long: '',
		userEmail: 'chelobat@gmail.com',
		createdAt: '10-01-2022'
	},
	{
		id: '58694a0f-3da1sdsdsd-471f-bd96-145571e29sssd72232',
		title: 'LAST Itemasdasdasdasdasdasdasdasdasdasdasdasdasdasdas',
		images: [

			{
				id: '3i333sdsdsdsh3h3h',
				uri: 'https://www.lavoz.com.ar/resizer/yTPjAhgCdtnrR3uTUvQenl4xPvE=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/PMQZYSEPNNENJCXH6QQ42IJIGM.jpg'
			},
			{
				id: 'asdajdsdsdshdasdas',
				uri: 'https://www.lavoz.com.ar/resizer/_DMSW2KznJdzrY_aC7itb9Uxkr4=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/6FES2YE25RCJZGHWK6NCSYTQHY.jpg'
			}
			,
			{
				id: '2nasdssss333',
				uri: 'https://www.ecestaticos.com/imagestatic/clipping/6d7/8b3/6d78b30ed2aa5a4d15513d5734114f1e/el-dueno-de-un-perro-lo-tiene-abandonado-y-sus-vecinos-le-construyen-una-caseta.jpg?mtime=1622465635'
			}],
		lat: '',
		long: '',
		userEmail: 'chelobat@gmail.com',
		createdAt: '10-01-2022'
	}
];
const ITEM_SIZE = HEIGHT_IMAGE_POR

const HomeScreen = () => {
	const navigation = useNavigation();
	const scrollY = useRef(new Animated.Value(0)).current
	return (
		<>
			<StatusBar animated={true} backgroundColor="white" hidden={false} />
			<SafeAreaView style={styles.safeAreaContainer}>
				<View style={[styles.containerTitle, { width: '95%', height: '7%', alignItems: 'flex-start', justifyContent: 'space-between', left: 2, top: 1, flexDirection: 'row' }]}>
					<View style={{ paddingRight: 20, width: '90%' }}>
						<View>
							<Text style={styles.headerTitleDate}>
								Lunes, 27 Mayo
							</Text>
						</View>
						<View>
							<Text style={[styles.headerTitle, { height: '90%' }]}>
								Últimos Registros
							</Text>
						</View>
					</View>
					<View style={{ top: 10, right: 10 }}>
						<Icon name='users' type='font-awesome' size={35} />
					</View>
				</View>

				<View
					style={styles.flatListContainer}
				>
					<Animated.FlatList
						onScroll={Animated.event(
							[{ nativeEvent: { contentOffset: { y: scrollY } } }],
							{ useNativeDriver: true }
						)}
						style={{ width: width - 10 }}
						showsVerticalScrollIndicator={false}
						data={DATA}
						renderItem={({ item, index }) => {
							const inputRange = [
								-1,
								0,
								ITEM_SIZE * (index),
								ITEM_SIZE * (index + 2),
							]
							const opacityInputRange = [
								-1,
								0,
								ITEM_SIZE * (index),
								ITEM_SIZE * (index + 1),
							]

							const scale = scrollY.interpolate({
								inputRange,
								outputRange: [1, 1, 1, 0]
							})
							const opacity = scrollY.interpolate({
								inputRange: opacityInputRange,
								outputRange: [1, 1, 1, 0]
							})

							return (
								<>
									<TouchableWithoutFeedback
										onPress={() => navigation.navigate('DetailsScreen', { item: item })}
									>
										<Animated.View style={[styles.itemContainer, { opacity, transform: [{ scale }] }]} >

											<SharedElement style={{ height: '80%', width: '100%', borderRadius: 20 }} id={item.images[0].id}>
												<Image
													style={{ width: width - 26, height: width - 189, borderRadius: 16, bottom: 7, left: 0, top: 0 }}
													source={{ uri: item.images[0].uri }}
													resizeMode='cover'
												/>
											</SharedElement>

											<View style={styles.itemDetailsContainer}>
												<View>
													<Text numberOfLines={1} style={styles.itemTitle}>{(item.title.length) > 20 ? `${item.title.substring(0, 30)}...` : item.title}</Text>
													<Text style={styles.itemUser}>{item.userEmail}</Text>
												</View>
												<TouchableOpacity onPress={() => null}>
													<View style={styles.mapIconContainer}>
														<Icon name='map-marker' type='font-awesome' size={37} color='red' />
													</View>
												</TouchableOpacity>
											</View>

										</Animated.View>
									</TouchableWithoutFeedback>

								</>
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
								<Icon name='plus-circle' type='font-awesome' size={30} color='white' />
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
		// top: Platform.OS === 'ios' ? 0 : 30,
		backgroundColor: '#rgb(255, 255, 255)',
		width: '100%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	headerContainer: {
		flexDirection: 'row',
		shadowColor: 'black',
		shadowRadius: 6,
		shadowOffset: { width: -10, height: -10 },
		elevation: 10,
		shadowOpacity: 1,
		width: '95%',
		overflow: 'hidden',
		height: 50,
		borderRadius: 15,
		backgroundColor: 'blue' /*'#rgb(255, 255, 255)'*/,
		alignItems: 'center',
		justifyContent: 'center',
		top: 5,
		borderColor: 'yellow',
		borderWidth: 0.5
	},
	flatListContainer: {
		width: width,
		top: 6,
		height: '81%',
		backgroundColor: '#rgb(255, 255, 255)',
		alignItems: 'center',
		paddingBottom: 0
	},
	containerTitle: {
		height: 35,
		width: '80%',
		alignItems: 'flex-start',
		justifyContent: 'flex-end',
		backgroundColor: '#rgb(255, 255, 255)'
	},
	headerTitle: {
		fontWeight: 'bold',
		fontSize: 25,
		// fontStyle: '',
		letterSpacing: 1.2
	},
	itemContainer: {
		left: 6,
		width: '96.5%',
		height: width - 130/*height / 3.4*/,
		borderColor: 'yellow',
		borderWidth: 1,
		borderRadius: 20,
		marginVertical: MARGIN_VERTICAL,
		alignItems: 'flex-start',
		justifyContent: 'center',
		backgroundColor: '#rgb(255, 255, 255)',
		shadowColor: Platform.OS === 'ios' ? 'gray' : 'black',
		shadowRadius: 6,
		shadowOffset: { width: 0, height: 5 },
		elevation: 8,
		shadowOpacity: 1,
	},
	lastView: {
		width: '95%',
		height: 70,
		top: TOP,
		alignItems: 'center',
		justifyContent: 'flex-end',
		backgroundColor: '#rgb(255, 255, 255)',
		paddingBottom: 15,
	},
	itemTitle: {
		left: 10,
		fontSize: width < 380 ? 14 : 16,
		fontWeight: 'bold',
		fontStyle: 'italic',
	},
	itemUser: {
		left: 10,
		paddingBottom: 0,
		fontWeight: 'bold',
		fontSize: width < 380 ? 14 : 16,
		color: 'black',
		opacity: .5
	},
	itemDetailsContainer: {
		top: 0,
		paddingHorizontal: 0,
		width: '98%',
		height: '19%',
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'space-between',
		paddingBottom: 3,
		borderRadius: 20,
		backgroundColor: '#rgb(255, 255, 255)'
	},
	mapIconContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		right: 5,
		width: '100%',
		height: '90%',
		backgroundColor: 'transparent'
	},
	iconPictureContainer: {
		width: 50,
		height: 50,
		position: 'absolute',
		right: 4,
		top: 5,
		borderRadius: 50 / 2,
		backgroundColor: 'white'
	},
	addButtonContainer: {
		marginTop: 1,
		marginBottom: 10,
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
	},
	headerTitleDate: {
		fontSize: 15,
		fontWeight: 'bold',
		opacity: .5,
		padding: 1
	}
})
