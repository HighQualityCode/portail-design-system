let usage = `
  <Select
    lg
    v-model="selectValue"
    label="Select"
    :options="options"
    :validators="selectValidators"
    :placeholder="'Input Value'"
    :idMode="true"
    extra-error-padding
  />

  <Select
    md
    v-model="selectValue2"
    label="Select"
    help="This is an explanation of what the select is used for."
    :options="options"
    :idMode="true"
    @change="changeSelect"
  />

  <Select
    lg
    alt-icon
    class="ds-select-demo"
    v-model="selectValue3"
    :options="options2"
    :placeholder="placeholderSelect"
    :option-styles="optionStyles"
    :validators="selectValidators3"
    custom-content
    reversible-icon
    type="number-dot-comma"
    width="414px"
    data-mode
    :readonly="false"
    :maxlength="3"
    extra-error-padding
  >
    <template #1>
      <div class="ds-demo-square">
        <Icon percent-solid size="18px" color="primary"></Icon>
      </div>
    </template>
    ...
  </Select>

  <Select
    lg
    class="ds-select-demo"
    v-model="selectValue4"
    label="Select"
    :options="options"
    :validators="selectValidators"
    :idMode="true"
    extra-error-padding
    alt-select
    alt-icon
    reversible-icon
    disabled
  />
`.slice(1);

export default {
  usage
};
