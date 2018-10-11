import PropTypes from "prop-types";

export default {
    // Label
    label: PropTypes.string,

    // Texto de ajuda
    helptext: PropTypes.string,

    // Custom properties
    custom: PropTypes.object,

    // Valor
    // TODO: definir o tipo corretamente
    value: PropTypes.any,

    // Invocado quando é finalizada a entrada do valor
    onFinishInput: PropTypes.func,
}

