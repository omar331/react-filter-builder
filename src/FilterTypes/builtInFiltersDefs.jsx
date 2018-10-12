import GenericFilterEditComponent from './GenericFilterEditComponent.jsx'
import GenericFilterViewComponent from './GenericFilterViewComponent.jsx'

import AutoCompleteFilterEditComponent from './AutoCompleteFilterEditComponent.jsx'
import AutoCompleteFilterViewComponent from './AutoCompleteFilterViewComponent.jsx'


import RadioSelectEditComponent from './RadioSelectEditComponent.jsx'
import RadioViewComponent from './RadioViewComponent.jsx'

export default {
    generic: {
        editComponent: GenericFilterEditComponent,
        viewComponent: GenericFilterViewComponent,
    },
    autocomplete: {
        editComponent: AutoCompleteFilterEditComponent,
        viewComponent: AutoCompleteFilterViewComponent,
    },
    radio: {
        editComponent: RadioSelectEditComponent,
        viewComponent: RadioViewComponent,
    },
}
