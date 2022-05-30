import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './AppNavigation';
import AuthNavigation from './AuthNavigation';

const RootNavigation = () => {
	const user = true;
	return (
		<NavigationContainer>
			{user ? <AppNavigation /> : <AuthNavigation />}
		</NavigationContainer>
	);
};

export default RootNavigation;
