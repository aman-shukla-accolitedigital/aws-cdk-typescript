
import Parcel from 'single-spa-react/parcel'
import { mountRootParcel } from 'single-spa'

const Users = () => {
    const VueUsersModuleName = "@test/users";

    async function loadVueUsersParcel() {
        const parcelsModule = await import(/* @vite-ignore */ VueUsersModuleName);
        return parcelsModule;
    }
    return (
        <div className="container">
        <Parcel
            config={loadVueUsersParcel}
            mountParcel={mountRootParcel}
            handleError={console.error}
            parcelDidMount={() => console.debug('Parcel mounted.')}
        />
        </div>
    );
};

export default Users;