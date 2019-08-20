let usage = `
<Button big>Big</Button>&nbsp;
<Button icon="add">Left Icon</Button>&nbsp;
<Button icon-right="expand_more">Right Icon</Button>&nbsp;
<Button alt>Alt</Button>&nbsp;
<Button icon="add" alt>Alt icon</Button>&nbsp;
<Button plain>Plain </Button>&nbsp;
<Button disabled>Disabled</Button>&nbsp;
<Button icon="menu" big plain></Button>&nbsp;
<Button icon="menu" big></Button>&nbsp;
<Button icon="menu" small plain>Small Button</Button>&nbsp;
<Button mobile-bottom>Mobile Button</Button>&nbsp;
<Button icon="menu" plain></Button>&nbsp;
<Button icon="menu"></Button>&nbsp;
<Button icon="add_circle" plain-two>Add New Item</Button>
<Button link="https://github.com/highqualitycode" plain>Click here</Button>
<Button link="https://github.com/highqualitycode" icon="account_circle">Github</Button>&nbsp;
<Button link="https://github.com/highqualitycode" icon="insert_chart" small link-ico>Full Report</Button>&nbsp;
<!-- OR -->
<button class="ds-button ds-button-primary">
  Button Label
</button>
`.slice(1)

export default {
  usage
}
