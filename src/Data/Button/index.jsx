import { Active, ActiveButtons, Add, BoldBorderOutlineButtons, BootstrapStateButtons, CheckBoxButtonGroup, CustomStateButtons, DangerButton, DefaultButtons, Disabled, DisabledButtons, DisabledOutlineButtons, ExtraSmallButtons, GradienButtons, InfoButton, LargeButtons, LightButton, OutlineButtons, OutlineExtraSmallButtons, OutlineLargeButtons, OutlineSmallButtons, PrimaryButton, RadioButtonGroup, SecondaryButton, SmallButtons, Submit, SuccessButton, WarningButton } from '../../Constant';

export const DefaultButtonData = [
    {
        title: DefaultButtons,
        span: BootstrapStateButtons,
        btnSub: [
            {
                colorClass: 'primary',
                title: PrimaryButton,
            },
            {
                colorClass: 'secondary',
                title: SecondaryButton,
            },
            {
                colorClass: 'success',
                title: SuccessButton,
            },
            {
                colorClass: 'info',
                title: InfoButton,
            },
            {
                colorClass: 'warning',
                title: WarningButton,
            },
            {
                colorClass: 'danger',
                title: DangerButton,
            },
            {
                colorClass: 'light',
                title: LightButton,
            },
        ]
    },
    {
        title: LargeButtons,
        span: Add,
        code: '.btn-lg',
        detail: ' class for large size buttons',
        cardId: 'large-btn',
        btnSub: [
            {
                size: 'lg',
                colorClass: 'primary',
                title: PrimaryButton
            },
            {
                size: 'lg',
                colorClass: 'secondary',
                title: SecondaryButton,
            },
            {
                size: 'lg',
                colorClass: 'success',
                title: SuccessButton,
            },
            {
                size: 'lg',
                colorClass: 'info',
                title: InfoButton,
            },
            {
                size: 'lg',
                colorClass: 'warning',
                title: WarningButton,
            },
            {
                size: 'lg',
                colorClass: 'danger',
                title: DangerButton,
            },
            {
                size: 'lg',
                colorClass: 'light',
                title: LightButton,
            },
        ]
    },
    {
        title: SmallButtons,
        span: Add,
        code: '.btn-sm',
        detail: ' class for small size buttons',
        cardId: 'small-btn',
        btnSub: [
            {
                size: 'sm',
                colorClass: 'primary',
                title: PrimaryButton,
            },
            {
                size: 'sm',
                colorClass: 'secondary',
                title: SecondaryButton,
            },
            {
                size: 'sm',
                colorClass: 'success',
                title: SuccessButton,
            },
            {
                size: 'sm',
                colorClass: 'info',
                title: InfoButton,
            },
            {
                size: 'sm',
                colorClass: 'warning',
                title: WarningButton,
            },
            {
                size: 'sm',
                colorClass: 'danger',
                title: DangerButton,
            },
            {
                size: 'sm',
                colorClass: 'light',
                title: LightButton,
            },
        ]
    },
    {
        title: ExtraSmallButtons,
        span: Add,
        code: '.btn-xs',
        detail: ' class for extra small size buttons',
        cardId: 'ex-small-btn',
        btnSub: [
            {
                size: 'xs',
                colorClass: 'primary',
                title: PrimaryButton,
            },
            {
                size: 'xs',
                colorClass: 'secondary',
                title: SecondaryButton,
            },
            {
                size: 'xs',
                colorClass: 'success',
                title: SuccessButton,
            },
            {
                size: 'xs',
                colorClass: 'info',
                title: InfoButton,
            },
            {
                size: 'xs',
                colorClass: 'warning',
                title: WarningButton,
            },
            {
                size: 'xs',
                colorClass: 'danger',
                title: DangerButton,
            },
            {
                size: 'xs',
                colorClass: 'light',
                title: LightButton,
            },
        ]
    },
    {
        title: ActiveButtons,
        span: Add,
        code: '.active',
        detail: ' class for active state',
        cardId: 'active-btn',
        btnSub: [
            {
                colorClass: 'primary active',
                title: Active,
            },
            {
                colorClass: 'secondary active',
                title: Active,
            },
            {
                colorClass: 'success active',
                title: Active,
            },
            {
                colorClass: 'info active',
                title: Active,
            },
            {
                colorClass: 'warning active',
                title: Active,
            },
            {
                colorClass: 'danger active',
                title: Active,
            },
            {
                colorClass: 'light active text-dark',
                title: Active,
            },
        ]
    },
    {
        title: DisabledButtons,
        span: Add,
        code: `.disabled'`,
        detail: ' class or ',
        code1: `disabled='disabled`,
        detail2: 'attribute for disabled button',
        cardId: 'disabled-btn',
        btnSub: [
            {
                colorClass: 'primary disabled',
                title: Disabled,
            },
            {
                colorClass: 'secondary disabled',
                title: Disabled,
            },
            {
                colorClass: 'success disabled',
                title: Disabled,
            },
            {
                colorClass: 'info disabled',
                title: Disabled,
            },
            {
                colorClass: 'warning disabled',
                title: Disabled,
            },
            {
                colorClass: 'danger disabled',
                title: Disabled,
            },
            {
                colorClass: 'light disabled',
                title: Disabled,
            },
        ]
    },
    {
        title: CustomStateButtons,
        span: 'The',
        code: `.btn`,
        detail: ' class used with',
        code1: `<button>, <a>`,
        detail1: ' and',
        code2: ` <input>`,
        detail2: 'elements.',
        cardId: 'disabled-btn',
        btnSub: [
            {
                colorClass: 'primary',
                title: 'Link',
            },
            {
                colorClass: 'secondary',
                title: 'Input',
            },
            {
                colorClass: 'success',
                title: Submit,
            },
            {
                colorClass: 'info',
                title: 'Button',
            }
        ]
    },
    {
        title: OutlineButtons,
        span: Add,
        code: `.btn-outline-*`,
        detail: ' class for border button',
        cardId: ' outline-button',
        btnSub: [
            {
                outline: true,
                colorClass: 'primary',
                title: PrimaryButton,
            },
            {
                outline: true,
                colorClass: 'secondary',
                title: SecondaryButton,
            },
            {
                outline: true,
                colorClass: 'success',
                title: SuccessButton,
            },
            {
                outline: true,
                colorClass: 'info',
                title: InfoButton,
            },
            {
                outline: true,
                colorClass: 'warning',
                title: WarningButton,
            },
            {
                outline: true,
                colorClass: 'danger',
                title: DangerButton,
            },
            {
                outline: true,
                colorClass: 'light',
                title: LightButton,
            },
        ]
    },
    {
        title: OutlineLargeButtons,
        span: Add,
        code: `.btn-outline-*`,
        detail: ' class for outline and',
        code1: '.btn-lg',
        detail1: ' class for large button',
        cardId: ' outline-bold-button',
        btnSub: [
            {
                size: 'lg',
                outline: true,
                colorClass: 'primary',
                title: PrimaryButton,
            },
            {
                size: 'lg',
                outline: true,
                colorClass: 'secondary',
                title: SecondaryButton,
            },
            {
                size: 'lg',
                outline: true,
                colorClass: 'success',
                title: SuccessButton,
            },
            {
                size: 'lg',
                outline: true,
                colorClass: 'info',
                title: InfoButton,
            },
            {
                size: 'lg',
                outline: true,
                colorClass: 'warning',
                title: WarningButton,
            },
            {
                size: 'lg',
                outline: true,
                colorClass: 'danger',
                title: DangerButton,
            },
            {
                size: 'lg',
                outline: true,
                colorClass: 'light',
                title: LightButton,
            }
        ]
    },
    {
        title: OutlineSmallButtons,
        span: Add,
        code: `.btn-outline-*`,
        detail: ' class for outline and',
        code1: '.btn-sm',
        detail1: ' class for small button',
        cardId: ' outline-small-button',
        btnSub: [
            {
                size: 'sm',
                outline: true,
                colorClass: 'primary',
                title: PrimaryButton,
            },
            {
                size: 'sm',
                outline: true,
                colorClass: 'secondary',
                title: SecondaryButton,
            },
            {
                size: 'sm',
                outline: true,
                colorClass: 'success',
                title: SuccessButton,
            },
            {
                size: 'sm',
                outline: true,
                colorClass: 'info',
                title: InfoButton,
            },
            {
                size: 'sm',
                outline: true,
                colorClass: 'warning',
                title: WarningButton,
            },
            {
                size: 'sm',
                outline: true,
                colorClass: 'danger',
                title: DangerButton,
            },
            {
                size: 'sm',
                outline: true,
                colorClass: 'light',
                title: LightButton,
            },
        ]
    },
    {
        title: OutlineExtraSmallButtons,
        span: Add,
        code: `.btn-outline-*`,
        detail: ' class for outline and',
        code1: '.btn-xs',
        detail1: ' class for extra small button',
        cardId: 'ex-outline-small-button',
        btnSub: [
            {
                size: 'xs',
                outline: true,
                colorClass: 'primary',
                title: PrimaryButton,
            },
            {
                size: 'xs',
                outline: true,
                colorClass: 'secondary',
                title: SecondaryButton,
            },
            {
                size: 'xs',
                outline: true,
                colorClass: 'success',
                title: SuccessButton,
            },
            {
                size: 'xs',
                outline: true,
                colorClass: 'info',
                title: InfoButton,
            },
            {
                size: 'xs',
                outline: true,
                colorClass: 'warning',
                title: WarningButton,
            },
            {
                size: 'xs',
                outline: true,
                colorClass: 'danger',
                title: DangerButton,
            },
            {
                size: 'xs',
                outline: true,
                colorClass: 'light',
                title: LightButton,
            },
        ]
    },
    {
        title: DisabledOutlineButtons,
        span: Add,
        code: `.disabled`,
        detail: ' class or',
        code1: ` disabled='disabled'`,
        detail1: ' attribute for disabled state',
        cardId: 'ex-outline-small-button',
        btnSub: [
            {
                colorClass: 'outline-primary disabled',
                title: Disabled,
            },
            {
                colorClass: 'outline-secondary disabled',
                title: Disabled,
            },
            {
                colorClass: 'outline-success disabled',
                title: Disabled,
            },
            {
                colorClass: 'outline-info disabled',
                title: Disabled,
            },
            {
                colorClass: 'outline-warning disabled',
                title: Disabled,
            },
            {
                colorClass: 'outline-danger disabled',
                title: Disabled,
            },
            {
                colorClass: 'outline-light disabled text-dark',
                title: Disabled,
            },
        ]
    },
    {
        title: GradienButtons,
        span: Add,
        code: `.btn-*-gradien`,
        detail: ' class for gradien button',
        cardId: 'gradiant',
        btnSub: [
            {
                colorClass: 'primary-gradien',
                title: PrimaryButton,
            },
            {

                colorClass: 'secondary-gradien',
                title: SecondaryButton,
            },
            {
                colorClass: 'success-gradien',
                title: SuccessButton,
            },
            {
                colorClass: 'info-gradien',
                title: InfoButton,
            },
            {
                colorClass: 'warning-gradien',
                title: WarningButton,
            },
            {
                colorClass: 'danger-gradien',
                title: DangerButton,
            }
        ]
    },
]

export const FlatButtonData = [
    {
        title: DefaultButtons,
        span: 'Add',
        code: `.btn-square`,
        detail: ' class for flat button',
        btnSub: [
            {
                colorClass: 'primary',
                title: PrimaryButton,
            },
            {
                colorClass: 'secondary',
                title: SecondaryButton,
            },
            {
                colorClass: 'success',
                title: SuccessButton,
            },
            {
                colorClass: 'info',
                title: InfoButton,
            },
            {
                colorClass: 'warning',
                title: WarningButton,
            },
            {
                colorClass: 'danger',
                title: DangerButton,
            },
            {
                colorClass: 'light',
                title: LightButton,
            },
        ]
    },
    {
        title: LargeButtons,
        span: 'Add',
        code: `.btn-square`,
        detail: ' and ',
        code1: `.btn-lg`,
        detail1: 'class for large button',
        btnSub: [
            {
                size: 'lg',
                colorClass: 'primary',
                title: PrimaryButton,
            },
            {
                size: 'lg',
                colorClass: 'secondary',
                title: SecondaryButton,
            },
            {
                size: 'lg',
                colorClass: 'success',
                title: SuccessButton,
            },
            {
                size: 'lg',
                colorClass: 'info',
                title: InfoButton,
            },
            {
                size: 'lg',
                colorClass: 'warning',
                title: WarningButton,
            },
            {
                size: 'lg',
                colorClass: 'danger',
                title: DangerButton,
            },
            {
                size: 'lg',
                colorClass: 'light',
                title: LightButton,
            }
        ]
    },
    {
        title: SmallButtons,
        span: 'Add',
        code: `.btn-square`,
        detail: ' and ',
        code1: `.btn-sm`,
        detail1: 'class for small button',
        btnSub: [
            {
                size: 'sm',
                colorClass: 'primary',
                title: PrimaryButton,
            },
            {
                size: 'sm',
                colorClass: 'secondary',
                title: SecondaryButton,
            },
            {
                size: 'sm',
                colorClass: 'success',
                title: SuccessButton,
            },
            {
                size: 'sm',
                colorClass: 'info',
                title: InfoButton,
            },
            {
                size: 'sm',
                colorClass: 'warning',
                title: WarningButton,
            },
            {
                size: 'sm',
                colorClass: 'danger',
                title: DangerButton,
            },
            {
                size: 'sm',
                colorClass: 'light',
                title: LightButton,
            }
        ]
    },
    {
        title: ExtraSmallButtons,
        span: 'Add',
        code: `.btn-square`,
        detail: ' and ',
        code1: `.btn-xs`,
        detail1: 'class for extra small button',
        btnSub: [
            {
                size: 'xs',
                colorClass: 'primary',
                title: PrimaryButton,
            },
            {
                size: 'xs',
                colorClass: 'secondary',
                title: SecondaryButton,
            },
            {
                size: 'xs',
                colorClass: 'success',
                title: SuccessButton,
            },
            {
                size: 'xs',
                colorClass: 'info',
                title: InfoButton,
            },
            {
                size: 'xs',
                colorClass: 'warning',
                title: WarningButton,
            },
            {
                size: 'xs',
                colorClass: 'danger',
                title: DangerButton,
            },
            {
                size: 'xs',
                colorClass: 'light',
                title: LightButton,
            }
        ]
    },
    {
        title: ActiveButtons,
        span: 'Add',
        code: `.active`,
        detail: ' for active state',
        btnSub: [
            {
                colorClass: 'primary active',
                title: Active,
            },
            {
                colorClass: 'secondary active',
                title: Active,
            },
            {
                colorClass: 'success active',
                title: Active,
            },
            {
                colorClass: 'info active',
                title: Active,
            },
            {
                colorClass: 'warning active',
                title: Active,
            },
            {
                colorClass: 'danger active',
                title: Active,
            },
            {
                colorClass: 'light active text-dark',
                title: Active,
            }
        ]
    },
    {
        title: DisabledButtons,
        span: 'Add',
        code: `.disabled`,
        detail: ' class or ',
        code1: `disabled="disabled"`,
        detail1: 'attribute for disabled button',
        btnSub: [
            {
                colorClass: 'primary disabled',
                title: PrimaryButton,
            },
            {
                colorClass: 'secondary disabled',
                title: SecondaryButton,
            },
            {
                colorClass: 'success disabled',
                title: SuccessButton,
            },
            {
                colorClass: 'info disabled',
                title: InfoButton,
            },
            {
                colorClass: 'warning disabled',
                title: WarningButton,
            },
            {
                colorClass: 'danger disabled',
                title: DangerButton,
            },
            {
                colorClass: 'light disabled',
                title: LightButton,
            }
        ]
    },
    {
        title: CustomStateButtons,
        span: 'Add',
        code: `.btn`,
        detail: ' class used with ',
        code1: `<button>`,
        detail1: ' , ',
        code2: `<a>`,
        detail2: ' and ',
        code3: `<Input>`,
        detail3: 'elements.',
        btnSub: [
            {
                colorClass: 'primary',
                title: 'Link',
            },
            {
                colorClass: 'secondary',
                title: 'Input',
            },
            {
                colorClass: 'success',
                title: Submit,
            },
            {
                colorClass: 'info',
                title: 'Button',
            }
        ]
    },
    {
        title: OutlineButtons,
        span: Add,
        code: `.btn-square`,
        detail: ' and ',
        code1: `.btn-outline-*`,
        detail1: 'class for button with outline',
        btnSub: [
            {
                colorClass: 'outline-primary',
                title: PrimaryButton,
            },
            {
                colorClass: 'outline-secondary',
                title: SecondaryButton,
            },
            {
                colorClass: 'outline-success',
                title: SuccessButton,
            },
            {
                colorClass: 'outline-info',
                title: InfoButton,
            },
            {
                colorClass: 'outline-warning',
                title: WarningButton,
            },
            {
                colorClass: 'outline-danger',
                title: DangerButton,
            },
            {
                colorClass: 'outline-light',
                title: LightButton,
            }
        ]
    },
    {
        title: BoldBorderOutlineButtons,
        span: Add,
        code: `.btn-square`,
        detail: ' and ',
        code1: `.btn-outline-*-2x`,
        detail1: ' class for button with outline',
        btnSub: [
            {
                colorClass: 'outline-primary-2x',
                title: PrimaryButton,
            },
            {
                colorClass: 'outline-secondary-2x',
                title: SecondaryButton,
            },
            {
                colorClass: 'outline-success-2x',
                title: SuccessButton,
            },
            {
                colorClass: 'outline-info-2x',
                title: InfoButton,
            },
            {
                colorClass: 'outline-warning-2x',
                title: WarningButton,
            },
            {
                colorClass: 'outline-danger-2x',
                title: DangerButton,
            },
            {
                colorClass: 'outline-light-2x text-dark',
                title: LightButton,
            }
        ]
    },
    {
        title: OutlineLargeButtons,
        span: Add,
        code: `.btn-square`,
        detail: ' , ',
        code1: `.btn-outline-*`,
        detail1: ' and ',
        code2: '.btn-lg',
        detail2: 'class for large button',
        cardId: 'outline-bold-button',
        btnSub: [
            {
                size: 'lg',
                colorClass: 'outline-primary',
                title: PrimaryButton,
            },
            {
                size: 'lg',
                colorClass: 'outline-secondary',
                title: SecondaryButton,
            },
            {
                size: 'lg',
                colorClass: 'outline-success',
                title: SuccessButton,
            },
            {
                size: 'lg',
                colorClass: 'outline-info',
                title: InfoButton,
            },
            {
                size: 'lg',
                colorClass: 'outline-warning',
                title: WarningButton,
            },
            {
                size: 'lg',
                colorClass: 'outline-danger',
                title: DangerButton,
            },
            {
                size: 'lg',
                colorClass: 'outline-light',
                title: LightButton,
            }
        ]
    },
    {
        title: OutlineSmallButtons,
        span: Add,
        code: `.btn-square`,
        detail: ' , ',
        code1: `.btn-outline-*`,
        detail1: ' and ',
        code2: '.btn-sm',
        detail2: 'class for small button',
        cardId: 'outline-small-button',
        btnSub: [
            {
                size: 'sm',
                colorClass: 'outline-primary',
                title: PrimaryButton,
            },
            {
                size: 'sm',
                colorClass: 'outline-secondary',
                title: SecondaryButton,
            },
            {
                size: 'sm',
                colorClass: 'outline-success',
                title: SuccessButton,
            },
            {
                size: 'sm',
                colorClass: 'outline-info',
                title: InfoButton,
            },
            {
                size: 'sm',
                colorClass: 'outline-warning',
                title: WarningButton,
            },
            {
                size: 'sm',
                colorClass: 'outline-danger',
                title: DangerButton,
            },
            {
                size: 'sm',
                colorClass: 'outline-light',
                title: LightButton,
            },
        ]
    },
    {
        title: OutlineExtraSmallButtons,
        span: Add,
        code: `.btn-square`,
        detail: ' , ',
        code1: `.btn-outline-*`,
        detail1: ' and ',
        code2: '.btn-xs',
        detail2: 'class for extra small button',
        cardId: 'ex-outline-small-button',
        btnSub: [
            {
                size: 'xs',
                colorClass: 'outline-primary',
                title: PrimaryButton,
            },
            {
                size: 'xs',
                colorClass: 'outline-secondary',
                title: SecondaryButton,
            },
            {
                size: 'xs',
                colorClass: 'outline-success',
                title: SuccessButton,
            },
            {
                size: 'xs',
                colorClass: 'outline-info',
                title: InfoButton,
            },
            {
                size: 'xs',
                colorClass: 'outline-warning',
                title: WarningButton,
            },
            {
                size: 'xs',
                colorClass: 'outline-danger',
                title: DangerButton,
            },
            {
                size: 'xs',
                colorClass: 'outline-light',
                title: LightButton,
            }
        ]
    },
    {
        title: DisabledOutlineButtons,
        span: Add,
        code: `.disabled`,
        detail: 'class or',
        code1: `disabled='disabled'`,
        detail1: ' attribute for disabled button',
        cardId: 'ex-outline-small-button',
        btnSub: [
            {
                colorClass: 'outline-primary disabled',
                title: PrimaryButton,
            },
            {
                colorClass: 'outline-secondary disabled',
                title: SecondaryButton,
            },
            {
                colorClass: 'outline-success disabled',
                title: SuccessButton,
            },
            {
                colorClass: 'outline-info disabled',
                title: InfoButton,
            },
            {
                colorClass: 'outline-warning disabled',
                title: WarningButton,
            },
            {
                colorClass: 'outline-danger disabled',
                title: DangerButton,
            },
            {
                colorClass: 'outline-light disabled text-dark',
                title: LightButton,
            },
        ]
    },
    {
        title: GradienButtons,
        span: Add,
        code: `.btn-square`,
        detail: ' and ',
        code1: `.btn-*-gradien`,
        detail1: ' class for gradien button',
        cardId: 'gradiant',
        btnSub: [
            {
                colorClass: 'primary-gradien',
                title: PrimaryButton,
            },
            {
                colorClass: 'secondary-gradien',
                title: SecondaryButton,
            },
            {
                colorClass: 'success-gradien',
                title: SuccessButton,
            },
            {
                colorClass: 'info-gradien',
                title: InfoButton,
            },
            {
                colorClass: 'warning-gradien',
                title: WarningButton,
            },
            {
                colorClass: 'danger-gradien',
                title: DangerButton,
            },
            {
                colorClass: 'light-gradien',
                title: LightButton,
            }
        ]
    },
]

export const EdgeButtonData = [
    {
        title: DefaultButtons,
        span: 'Add',
        code: `.btn-pill`,
        detail: ' class for edge button',
        btnSub: [
            {
                colorClass: 'primary btn-pill',
                title: PrimaryButton,
            },
            {
                colorClass: 'secondary btn-pill',
                title: SecondaryButton,
            },
            {
                colorClass: 'success btn-pill',
                title: SuccessButton,
            },
            {
                colorClass: 'info btn-pill',
                title: InfoButton,
            },
            {
                colorClass: 'warning btn-pill',
                title: WarningButton,
            },
            {
                colorClass: 'danger btn-pill',
                title: DangerButton,
            },
            {
                colorClass: 'light btn-pill',
                title: LightButton,
            },
        ]
    },
    {
        title: LargeButtons,
        span: 'Add',
        code: `.btn-pill`,
        detail: ' and ',
        code1: `.btn-lg`,
        detail1: ' class for large button',
        btnSub: [
            {
                size: 'lg',
                colorClass: 'primary btn-pill',
                title: PrimaryButton,
            },
            {
                size: 'lg',
                colorClass: 'secondary btn-pill',
                title: SecondaryButton,
            },
            {
                size: 'lg',
                colorClass: 'success btn-pill',
                title: SuccessButton,
            },
            {
                size: 'lg',
                colorClass: 'info btn-pill',
                title: InfoButton,
            },
            {
                size: 'lg',
                colorClass: 'warning btn-pill',
                title: WarningButton,
            },
            {
                size: 'lg',
                colorClass: 'danger btn-pill',
                title: DangerButton,
            },
            {
                size: 'lg',
                colorClass: 'light btn-pill',
                title: LightButton,
            }
        ]
    },
    {
        title: SmallButtons,
        span: 'Add',
        code: `.btn-pill`,
        detail: ' and ',
        code1: `.btn-sm`,
        detail1: ' class for small button',
        btnSub: [
            {
                size: 'sm',
                colorClass: 'primary btn-pill',
                title: PrimaryButton,
            },
            {
                size: 'sm',
                colorClass: 'secondary btn-pill',
                title: SecondaryButton,
            },
            {
                size: 'sm',
                colorClass: 'success btn-pill',
                title: SuccessButton,
            },
            {
                size: 'sm',
                colorClass: 'info btn-pill',
                title: InfoButton,
            },
            {
                size: 'sm',
                colorClass: 'warning btn-pill',
                title: WarningButton,
            },
            {
                size: 'sm',
                colorClass: 'danger btn-pill',
                title: DangerButton,
            },
            {
                size: 'sm',
                colorClass: 'light btn-pill',
                title: LightButton,
            }
        ]
    },
    {
        title: ActiveButtons,
        span: 'Add',
        code: `.active`,
        detail: ' for active state',
        btnSub: [
            {
                colorClass: 'primary btn-pill active',
                title: Active,
            },
            {
                colorClass: 'secondary btn-pill active',
                title: Active,
            },
            {
                colorClass: 'success btn-pill active',
                title: Active,
            },
            {
                colorClass: 'info btn-pill active',
                title: Active,
            },
            {
                colorClass: 'warning btn-pill active',
                title: Active,
            },
            {
                colorClass: 'danger btn-pill active',
                title: Active,
            },
            {
                colorClass: 'light btn-pill active',
                title: Active,
            }
        ]
    },
    {
        title: DisabledButtons,
        span: 'Add',
        code: `.disabled`,
        detail: ' class or ',
        code1: `disabled="disabled"`,
        detail1: ' attribute for disabled button',
        btnSub: [
            {
                colorClass: 'primary btn-pill disabled',
                title: Disabled,
            },
            {
                colorClass: 'secondary btn-pill disabled',
                title: Disabled,
            },
            {
                colorClass: 'success btn-pill disabled',
                title: Disabled,
            },
            {
                colorClass: 'info btn-pill disabled',
                title: Disabled,
            },
            {
                colorClass: 'warning btn-pill disabled',
                title: Disabled,
            },
            {
                colorClass: 'danger btn-pill disabled',
                title: Disabled,
            },
            {
                colorClass: 'light btn-pill disabled',
                title: Disabled,
            }
        ]
    },
    {
        title: CustomStateButtons,
        span: 'Add',
        code: `.btn`,
        detail: ' class used with ',
        code1: `<button>`,
        detail1: ' , ',
        code2: `<a>`,
        detail2: ' and ',
        code3: `<Input>`,
        detail3: ' elements.',
        btnSub: [
            {
                colorClass: 'primary btn-pill',
                title: 'Link',
            },
            {
                colorClass: 'secondary btn-pill',
                title: 'Input',
            },
            {
                colorClass: 'success btn-pill',
                title: Submit,
            },
            {
                colorClass: 'info btn-pill',
                title: 'Button',
            }
        ]
    },
    {
        title: OutlineButtons,
        span: Add,
        code: `.btn-pill`,
        detail: ' and ',
        code1: `.btn-outline-*`,
        detail1: ' class for button with outline',
        btnSub: [
            {
                colorClass: 'outline-primary btn-pill',
                title: PrimaryButton,
            },
            {
                colorClass: 'outline-secondary btn-pill',
                title: SecondaryButton,
            },
            {
                colorClass: 'outline-success btn-pill',
                title: SuccessButton,
            },
            {
                colorClass: 'outline-info btn-pill',
                title: InfoButton,
            },
            {
                colorClass: 'outline-warning btn-pill',
                title: WarningButton,
            },
            {
                colorClass: 'outline-danger btn-pill',
                title: DangerButton,
            },
            {
                colorClass: 'outline-light btn-pill',
                title: LightButton,
            }
        ]
    },
    {
        title: BoldBorderOutlineButtons,
        span: Add,
        code1: `.btn-pill`,
        detail1: ' and ',
        code2: '.btn-outline-*-2x',
        detail2: 'class for large button',
        cardId: ' class for button with bold outline',
        btnSub: [
            {
                size: 'lg',
                colorClass: 'outline-primary-2x btn-pill',
                title: PrimaryButton,
            },
            {
                size: 'lg',
                colorClass: 'outline-secondary-2x btn-pill',
                title: SecondaryButton,
            },
            {
                size: 'lg',
                colorClass: 'outline-success-2x btn-pill',
                title: SuccessButton,
            },
            {
                size: 'lg',
                colorClass: 'outline-info-2x btn-pill',
                title: InfoButton,
            },
            {
                size: 'lg',
                colorClass: 'outline-warning-2x btn-pill',
                title: WarningButton,
            },
            {
                size: 'lg',
                colorClass: 'outline-danger-2x btn-pill',
                title: DangerButton,
            },
            {
                size: 'lg',
                colorClass: 'outline-light-2x btn-pill',
                title: LightButton,
            }
        ]
    },
    {
        title: OutlineLargeButtons,
        span: Add,
        code: `.btn-pill`,
        detail: ' , ',
        code1: '.btn-outline-*',
        detail1: ' and ',
        code2: '.btn-lg',
        detail2: ' class for large button',
        cardId: 'outline-bold-button',
        btnSub: [
            {
                size: 'lg',
                colorClass: 'outline-primary btn-pill',
                title: PrimaryButton,
            },
            {
                size: 'lg',
                colorClass: 'outline-secondary btn-pill',
                title: SecondaryButton,
            },
            {
                size: 'lg',
                colorClass: 'outline-success btn-pill',
                title: SuccessButton,
            },
            {
                size: 'lg',
                colorClass: 'outline-info btn-pill',
                title: InfoButton,
            },
            {
                size: 'lg',
                colorClass: 'outline-warning btn-pill',
                title: WarningButton,
            },
            {
                size: 'lg',
                colorClass: 'outline-danger btn-pill',
                title: DangerButton,
            },
            {
                size: 'lg',
                colorClass: 'outline-light btn-pill',
                title: LightButton,
            }
        ]
    },
    {
        title: OutlineSmallButtons,
        span: Add,
        code: `.btn-pill`,
        detail: ' , ',
        code1: '.btn-outline-*',
        detail1: ' and ',
        code2: '.btn-sm',
        detail2: ' class for small button',
        cardId: 'outline-small-button',
        btnSub: [
            {
                size: 'sm',
                colorClass: 'outline-primary btn-pill',
                title: PrimaryButton,
            },
            {
                size: 'sm',
                colorClass: 'outline-secondary btn-pill',
                title: SecondaryButton,
            },
            {
                size: 'sm',
                colorClass: 'outline-success btn-pill',
                title: SuccessButton,
            },
            {
                size: 'sm',
                colorClass: 'outline-info btn-pill',
                title: InfoButton,
            },
            {
                size: 'sm',
                colorClass: 'outline-warning btn-pill',
                title: WarningButton,
            },
            {
                size: 'sm',
                colorClass: 'outline-danger btn-pill',
                title: DangerButton,
            },
            {
                size: 'sm',
                colorClass: 'outline-light btn-pill',
                title: LightButton,
            },
        ]
    },
    {
        title: OutlineExtraSmallButtons,
        span: Add,
        code: `.btn-pill`,
        detail: ' , ',
        code1: '.btn-outline-*',
        detail1: ' and ',
        code2: '.btn-xs',
        detail2: ' class for extra small button',
        cardId: 'ex-outline-small-button',
        btnSub: [
            {
                size: 'xs',
                colorClass: 'outline-primary btn-pill',
                title: PrimaryButton,
            },
            {
                size: 'xs',
                colorClass: 'outline-secondary btn-pill',
                title: SecondaryButton,
            },
            {
                size: 'xs',
                colorClass: 'outline-success btn-pill',
                title: SuccessButton,
            },
            {
                size: 'xs',
                colorClass: 'outline-info btn-pill',
                title: InfoButton,
            },
            {
                size: 'xs',
                colorClass: 'outline-warning btn-pill',
                title: WarningButton,
            },
            {
                size: 'xs',
                colorClass: 'outline-danger btn-pill',
                title: DangerButton,
            },
            {
                size: 'xs',
                colorClass: 'outline-light btn-pill',
                title: LightButton,
            }
        ]
    },
    {
        title: DisabledOutlineButtons,
        span: Add,
        code1: `.disabled`,
        detail1: ' class or ',
        code2: `disabled="disabled"`,
        detail2: ' attribute for disabled state',
        cardId: 'ex-outline-small-button',
        btnSub: [
            {
                colorClass: 'outline-primary disabled btn-pill',
                title: Disabled,
            },
            {
                colorClass: 'outline-secondary disabled btn-pill',
                title: Disabled,
            },
            {
                colorClass: 'outline-success disabled btn-pill',
                title: Disabled,
            },
            {
                colorClass: 'outline-info disabled btn-pill',
                title: Disabled,
            },
            {
                colorClass: 'outline-warning disabled btn-pill',
                title: Disabled,
            },
            {
                colorClass: 'outline-danger disabled btn-pill',
                title: Disabled,
            },
            {
                colorClass: 'outline-light disabled btn-pill',
                title: Disabled,
            },
        ]
    },
    {
        title: GradienButtons,
        span: Add,
        code: `.btn-pill`,
        detail: ' and ',
        code1: `.btn-*-gradien`,
        detail1: ' class for gradien button',
        cardId: 'gradiant',
        btnSub: [
            {
                colorClass: 'primary-gradien btn-pill',
                title: PrimaryButton,
            },
            {
                colorClass: 'secondary-gradien btn-pill',
                title: SecondaryButton,
            },
            {
                colorClass: 'success-gradien btn-pill',
                title: SuccessButton,
            },
            {
                colorClass: 'info-gradien btn-pill',
                title: InfoButton,
            },
            {
                colorClass: 'warning-gradien btn-pill',
                title: WarningButton,
            },
            {
                colorClass: 'danger-gradien btn-pill',
                title: DangerButton,
            },
            {
                colorClass: 'light-gradien btn-pill',
                title: LightButton,
            }
        ]
    },
]
export const GroupBtnData = [
    {
        title: 'Basic & Edge Button Group',
        color: [
            {
                btnClass: ' btn-group-pill',
                colorClass: 'primary',
                title1: 'Left',
                title2: 'Middle',
                title3: 'Right'
            },
            {
                btnClass: ' btn-group-pill',
                colorClass: 'secondary',
                title1: 'Left',
                title2: 'Middle',
                title3: 'Right'
            },
            {
                btnClass: ' btn-group-pill',
                colorClass: 'success',
                title1: 'Left',
                title2: 'Middle',
                title3: 'Right'
            },
            {
                btnClass: ' btn-group-pill',
                colorClass: 'info',
                title1: 'Left',
                title2: 'Middle',
                title3: 'Right'
            },
            {
                btnClass: ' btn-group-pill',
                colorClass: 'warning',
                title1: 'Left',
                title2: 'Middle',
                title3: 'Right'
            },
            {
                btnClass: ' btn-group-pill',
                colorClass: 'danger',
                title1: 'Left',
                title2: 'Middle',
                title3: 'Right'
            },
            {
                btnClass: ' btn-group-pill',
                colorClass: 'light',
                title1: 'Left',
                title2: 'Middle',
                title3: 'Right'
            },
            {
                btnClass: ' btn-group-pill',
                colClass: 'Button-group-mb-sm',
                colorClass: 'dark',
                title1: 'Left',
                title2: 'Middle',
                title3: 'Right'
            }
        ]
    },
    {
        title: 'Flat Button Group',
        color: [
            {
                btnClass: ' btn-group-square',
                colorClass: 'primary',
                title1: 'Left',
                title2: 'Middle',
                title3: 'Right'
            },
            {
                btnClass: ' btn-group-square',
                colorClass: 'secondary',
                title1: 'Left',
                title2: 'Middle',
                title3: 'Right'
            },
            {
                btnClass: ' btn-group-square',
                colorClass: 'success',
                title1: 'Left',
                title2: 'Middle',
                title3: 'Right'
            },
            {
                btnClass: ' btn-group-square',
                colorClass: 'info',
                title1: 'Left',
                title2: 'Middle',
                title3: 'Right'
            },
            {
                btnClass: ' btn-group-square',
                colorClass: 'warning',
                title1: 'Left',
                title2: 'Middle',
                title3: 'Right'
            },
            {
                btnClass: ' btn-group-square',
                colorClass: 'danger',
                title1: 'Left',
                title2: 'Middle',
                title3: 'Right'
            },
            {
                btnClass: ' btn-group-square',
                colorClass: 'light',
                title1: 'Left',
                title2: 'Middle',
                title3: 'Right'
            },
            {
                colClass: 'Button-group-mb-sm',
                btnClass: ' btn-group-square',
                colorClass: 'dark',
                title1: 'Left',
                title2: 'Middle',
                title3: 'Right'
            }
        ]
    },
    {
        title: 'Sizing Button Group',
        color: [
            {
                colorClass: 'primary',
                size: 'lg',
                title1: 'Left',
                title2: 'Middle',
                title3: 'Right'
            },
            {
                colorClass: 'secondary',
                size: 'lg',
                title1: 'Left',
                title2: 'Middle',
                title3: 'Right'
            },
            {
                colorClass: 'success',
                size: 'lg',
                title1: 'Left',
                title2: 'Middle',
                title3: 'Right'
            },
            {
                colorClass: 'info',
                size: 'lg',
                title1: 'Left',
                title2: 'Middle',
                title3: 'Right'
            },
            {
                colorClass: 'warning',
                size: 'lg',
                title1: 'Left',
                title2: 'Middle',
                title3: 'Right'
            },
            {
                colorClass: 'danger',
                size: 'lg',
                title1: 'Left',
                title2: 'Middle',
                title3: 'Right'
            },
            {
                colorClass: 'light',
                size: 'lg',
                title1: 'Left',
                title2: 'Middle',
                title3: 'Right'
            },
            {
                colorClass: 'dark',
                size: 'lg',
                title1: 'Left',
                title2: 'Middle',
                title3: 'Right',
                colClass: 'Button-group-mb-sm',
            }
        ]
    },
    {
        title: 'Outline Edges Group',
        color: [
            {
                btnClass: ' btn-group-pill',
                colorClass: ' btn-outline-primary',
                title1: 'Left',
                title2: 'Middle',
                title3: 'Right'
            },
            {
                btnClass: ' btn-group-pill',
                colorClass: ' btn-outline-secondary',
                title1: 'Left',
                title2: 'Middle',
                title3: 'Right'
            },
            {
                btnClass: ' btn-group-pill',
                colorClass: ' btn-outline-success',
                title1: 'Left',
                title2: 'Middle',
                title3: 'Right'
            },
            {
                btnClass: ' btn-group-pill',
                colorClass: ' btn-outline-info',
                title1: 'Left',
                title2: 'Middle',
                title3: 'Right'
            },
            {
                btnClass: ' btn-group-pill',
                colorClass: ' btn-outline-warning',
                title1: 'Left',
                title2: 'Middle',
                title3: 'Right'
            },
            {
                btnClass: ' btn-group-pill',
                colorClass: ' btn-outline-danger',
                title1: 'Left',
                title2: 'Middle',
                title3: 'Right'
            },
            {
                btnClass: ' btn-group-pill',
                colorClass: ' btn-outline-light',
                title1: 'Left',
                title2: 'Middle',
                title3: 'Right'
            },
            {
                colClass: 'Button-group-mb-sm',
                btnClass: ' btn-group-pill',
                colorClass: ' btn-outline-dark',
                title1: 'Left',
                title2: 'Middle',
                title3: 'Right'
            }
        ]
    },
];

export const RadioBtnData = [
    {
        title: RadioButtonGroup,
        span: Add,
        code1: '.active',
        detail1: 'for active state and',
        code2: '.disabled',
        detail2: 'class or',
        code3: `disabled='disabled'`,
        detail3: 'attribute',
        btnSub: [
            {
                btnClass: 'btn-radio',
                colorClass: 'primary',
                divClass: 'radio radio-primary',
                id1: 'radio7',
                title1: 'Option 1',
                id2: 'radio8',
                title2: 'Option 2',
            },
            {
                btnClass: 'btn-radio',
                colorClass: 'secondary',
                divClass: 'radio radio-secondary',
                id1: 'radio11',
                title1: 'Option 1',
                id2: 'radio12',
                title2: 'Option 2',
            },
            {
                btnClass: 'btn-radio',
                colorClass: 'success',
                divClass: 'radio radio-success',
                id1: 'radio13',
                title1: 'Option 1',
                id2: 'radio14',
                title2: 'Option 2',
            },
            {
                btnClass: 'btn-radio',
                colorClass: 'info',
                divClass: 'radio radio-info',
                id1: 'radio15',
                title1: 'Option 1',
                id2: 'radio16',
                title2: 'Option 2',
            },
            {
                btnClass: 'btn-radio',
                colorClass: 'warning',
                divClass: 'radio radio-warning',
                id1: 'radio17',
                title1: 'Option 1',
                id2: 'radio18',
                title2: 'Option 2',
            },
            {
                btnClass: 'btn-radio',
                colorClass: 'danger',
                divClass: 'radio radio-danger',
                id1: 'radio20',
                title1: 'Option 1',
                id2: 'radio22',
                title2: 'Option 2',
            },
            {
                colClass: 'button-group-mb-sm xl-50',
                btnClass: 'btn-radio',
                colorClass: 'light txt-dark',
                divClass: 'radio radio-light',
                id1: 'radio23',
                title1: 'Option 1',
                id2: 'radio24',
                title2: 'Option 2',
            }
        ]
    },
    {
        title: CheckBoxButtonGroup,
        span: Add,
        code1: '.active',
        detail1: 'for active state and',
        code2: '.disabled',
        detail2: 'class or',
        code3: `disabled='disabled'`,
        detail3: 'attribute',
        btnSub: [
            {
                btnClass: 'btn-option',
                colorClass: 'primary',
                divClass: 'checkbox checkbox-primary',
                id1: 'checkbox-primary-1',
                title1: 'Option 1',
                id2: 'checkbox-primary-2',
                title2: 'Option 2',
                checkBox: true
            },
            {
                btnClass: 'btn-group btn-option',
                colorClass: 'secondary',
                divClass: 'checkbox checkbox-secondary',
                id1: 'checkbox-primary-3',
                title1: 'Option 1',
                id2: 'checkbox-primary-4',
                title2: 'Option 2',
                checkBox: true
            },
            {
                btnClass: 'btn-group btn-option',
                colorClass: 'success',
                divClass: 'checkbox checkbox-success',
                id1: 'checkbox-primary-5',
                title1: 'Option 1',
                id2: 'checkbox-primary-6',
                title2: 'Option 2',
                checkBox: true
            },
            {
                btnClass: 'btn-group btn-option',
                colorClass: 'info',
                divClass: 'checkbox checkbox-info',
                id1: 'checkbox-primary-7',
                title1: 'Option 1',
                id2: 'checkbox-primary-8',
                title2: 'Option 2',
                checkBox: true
            },
            {
                btnClass: 'btn-group btn-option',
                colorClass: 'warning',
                divClass: 'checkbox checkbox-warning',
                id1: 'checkbox-primary-9',
                title1: 'Option 1',
                id2: 'checkbox-primary-10',
                title2: 'Option 2',
                checkBox: true
            },
            {
                btnClass: 'btn-group btn-option',
                colorClass: 'danger',
                divClass: 'checkbox checkbox-danger',
                id1: 'checkbox-danger-11',
                title1: 'Option 1',
                id2: 'checkbox-danger-12',
                title2: 'Option 2',
                checkBox: true
            },
            {
                colClass: 'button-group-mb-sm',
                btnClass: 'btn-group btn-option',
                colorClass: 'light txt-dark',
                divClass: 'checkbox checkbox-light',
                id1: 'checkbox-light-13',
                title1: 'Option 1',
                id2: 'checkbox-light-14',
                title2: 'Option 2',
                checkBox: true
            }
        ]
    },
]

// export const RaisedButtonData = [
//     {
//         title: DefaultButtons,
//         span: Add,
//         code: `.btn-pill`,
//         detail: ' and',
//         code1: `.air-*`,
//         detail1: ' class  for raised button',
//         btnSub: [
//             {
//                 colorClass: 'primary air-primary btn-pill',
//                 title: PrimaryButton,
//             },
//             {
//                 colorClass: 'secondary air-secondary btn-pill',
//                 title: SecondaryButton,
//             },
//             {
//                 colorClass: 'success air-success btn-pill',
//                 title: SuccessButton,
//             },
//             {
//                 colorClass: 'info air-info btn-pill',
//                 title: InfoButton,
//             },
//             {
//                 colorClass: 'warning air-warning btn-pill',
//                 title: WarningButton,
//             },
//             {
//                 colorClass: 'danger air-danger btn-pill',
//                 title: DangerButton,
//             },
//             {
//                 colorClass: 'light air-light btn-pill',
//                 title: LightButton,
//             },
//         ]
//     },
//     {
//         title: LargeButtons,
//         span: 'Add',
//         code: `.btn-pill`,
//         detail: ' , ',
//         code1: `.btn-air-*`,
//         detail1: ' and ',
//         code2: `.btn-lg`,
//         detail2: 'class for large button',
//         btnSub: [
//             {
//                 size: 'lg',
//                 colorClass: 'primary air-primary btn-pill',
//                 title: PrimaryButton,
//             },
//             {
//                 size: 'lg',
//                 colorClass: 'secondary air-secondary btn-pill',
//                 title: SecondaryButton,
//             },
//             {
//                 size: 'lg',
//                 colorClass: 'success air-success btn-pill',
//                 title: SuccessButton,
//             },
//             {
//                 size: 'lg',
//                 colorClass: 'info air-info btn-pill',
//                 title: InfoButton,
//             },
//             {
//                 size: 'lg',
//                 colorClass: 'warning air-warning btn-pill',
//                 title: WarningButton,
//             },
//             {
//                 size: 'lg',
//                 colorClass: 'danger air-danger btn-pill',
//                 title: DangerButton,
//             },
//             {
//                 size: 'lg',
//                 colorClass: 'light air-light btn-pill',
//                 title: LightButton,
//             }
//         ]
//     },
//     {
//         title: SmallButtons,
//         span: 'Add',
//         code: `.btn-pill`,
//         detail: ' , ',
//         code1: `.btn-air-*`,
//         detail1: ' and',
//         code2: `.btn-sm`,
//         detail2: 'class for small button',
//         btnSub: [
//             {
//                 size: 'sm',
//                 colorClass: 'primary btn-pill air-primary',
//                 title: PrimaryButton,
//             },
//             {
//                 size: 'sm',
//                 colorClass: 'secondary btn-pill air-primary',
//                 title: SecondaryButton,
//             },
//             {
//                 size: 'sm',
//                 colorClass: 'success btn-pill air-primary',
//                 title: SuccessButton,
//             },
//             {
//                 size: 'sm',
//                 colorClass: 'info btn-pill air-primary',
//                 title: InfoButton,
//             },
//             {
//                 size: 'sm',
//                 colorClass: 'warning btn-pill air-primary',
//                 title: WarningButton,
//             },
//             {
//                 size: 'sm',
//                 colorClass: 'danger btn-pill air-primary',
//                 title: DangerButton,
//             },
//             {
//                 size: 'sm',
//                 colorClass: 'light btn-pill air-primary',
//                 title: LightButton,
//             }
//         ]
//     },
//     {
//         title: ExtraSmallButtons,
//         span: Add,
//         code: `.btn-pill`,
//         detail: ' , ',
//         code1: `.btn-air-*`,
//         detail1: ' and',
//         code2: `.btn-sm`,
//         detail2: 'class for small button',
//         btnSub: [
//             {
//                 size: 'xs',
//                 colorClass: 'primary btn-pill air-primary',
//                 title: PrimaryButton,
//             },
//             {
//                 size: 'xs',
//                 colorClass: 'secondary btn-pill air-primary',
//                 title: SecondaryButton,
//             },
//             {
//                 size: 'xs',
//                 colorClass: 'success btn-pill air-primary',
//                 title: SuccessButton,
//             },
//             {
//                 size: 'xs',
//                 colorClass: 'info btn-pill air-primary',
//                 title: InfoButton,
//             },
//             {
//                 size: 'xs',
//                 colorClass: 'warning btn-pill air-primary',
//                 title: WarningButton,
//             },
//             {
//                 size: 'xs',
//                 colorClass: 'danger btn-pill air-primary',
//                 title: DangerButton,
//             },
//             {
//                 size: 'xs',
//                 colorClass: 'light btn-pill air-primary',
//                 title: LightButton,
//             }
//         ]
//     },
//     {
//         title: ActiveButtons,
//         span: Add,
//         code: `.active`,
//         detail: 'for active state',
//         btnSub: [
//             {
//                 colorClass: 'primary btn-pill air-primary active',
//                 title: PrimaryButton,
//             },
//             {
//                 colorClass: 'secondary btn-pill air-primary active',
//                 title: SecondaryButton,
//             },
//             {
//                 colorClass: 'success btn-pill air-primary active',
//                 title: SuccessButton,
//             },
//             {
//                 colorClass: 'info btn-pill air-primary active',
//                 title: InfoButton,
//             },
//             {
//                 colorClass: 'warning btn-pill air-primary active',
//                 title: WarningButton,
//             },
//             {
//                 colorClass: 'danger btn-pill air-primary active',
//                 title: DangerButton,
//             },
//             {
//                 colorClass: 'light btn-pill air-primary active text-dark',
//                 title: LightButton,
//             }
//         ]
//     },
//     {
//         title: DisabledButtons,
//         span: 'Add',
//         code: `.disabled`,
//         detail: ' class or ',
//         code1: `disabled="disabled"`,
//         detail1: ' attribute for disabled button',
//         btnSub: [
//             {
//                 colorClass: 'primary btn-pill air-primary disabled',
//                 title: PrimaryButton,
//             },
//             {
//                 colorClass: 'secondary btn-pill air-primary disabled',
//                 title: SecondaryButton,
//             },
//             {
//                 colorClass: 'success btn-pill air-primary disabled',
//                 title: SuccessButton,
//             },
//             {
//                 colorClass: 'info btn-pill air-primary disabled',
//                 title: InfoButton,
//             },
//             {
//                 colorClass: 'warning btn-pill air-primary disabled',
//                 title: WarningButton,
//             },
//             {
//                 colorClass: 'danger btn-pill air-primary disabled',
//                 title: DangerButton,
//             },
//             {
//                 colorClass: 'light btn-pill air-primary disabled',
//                 title: LightButton,
//             }
//         ]
//     },
//     {
//         title: CustomStateButtons,
//         span: 'Add',
//         code: `.btn`,
//         detail: ' class used with ',
//         code1: `<button>`,
//         detail1: ' , ',
//         code2: `<a>`,
//         detail2: ' and ',
//         code3: `<Input>`,
//         detail3: ' elements.',
//         btnSub: [
//             {
//                 colorClass: 'primary air-primary btn-pill',
//                 title: 'Link',
//             },
//             {
//                 colorClass: 'secondary air-secondary btn-pill',
//                 title: 'Input',
//             },
//             {
//                 colorClass: 'success air-success btn-pill',
//                 title: Submit,
//             },
//             {
//                 colorClass: 'info air-info btn-pill',
//                 title: 'Button',
//             }
//         ]
//     },
//     {
//         title: OutlineButtons,
//         span: Add,
//         code: `.btn-pill`,
//         detail: ' , ',
//         code1: `.btn-air-*`,
//         detail1: ' and',
//         code2: `.btn-outline-*`,
//         detail2: 'class for button with outline',
//         btnSub: [
//             {
//                 colorClass: 'air-primary btn-outline-primary btn-pill',
//                 title: PrimaryButton,
//             },
//             {
//                 colorClass: 'air-secondary btn-outline-secondary btn-pill',
//                 title: SecondaryButton,
//             },
//             {
//                 colorClass: 'air-success btn-outline-success btn-pill',
//                 title: SuccessButton,
//             },
//             {
//                 colorClass: 'air-info btn-outline-info btn-pill',
//                 title: InfoButton,
//             },
//             {
//                 colorClass: 'air-warning btn-outline-warning btn-pill',
//                 title: WarningButton,
//             },
//             {
//                 colorClass: 'air-danger btn-outline-danger btn-pill',
//                 title: DangerButton,
//             },
//             {
//                 colorClass: 'air-light btn-outline-light btn-pill',
//                 title: LightButton,
//             }
//         ]
//     },
//     {
//         title: BoldBorderOutlineButtons,
//         span: Add,
//         code: `.btn-pill`,
//         detail: ' , ',
//         code1: `.btn-air-*`,
//         detail1: ' and',
//         code2: `.btn-outline-*-2x`,
//         detail2: 'class for button with bold outline',
//         cardId: 'outline-bold-button',
//         btnSub: [
//             {
//                 size: 'lg',
//                 colorClass: 'air-primary btn-outline-primary-2x btn-pill',
//                 title: PrimaryButton,
//             },
//             {
//                 size: 'lg',
//                 colorClass: 'air-secondary btn-outline-secondary-2x btn-pill',
//                 title: SecondaryButton,
//             },
//             {
//                 size: 'lg',
//                 colorClass: 'air-success btn-outline-success-2x btn-pill',
//                 title: SuccessButton,
//             },
//             {
//                 size: 'lg',
//                 colorClass: 'air-info btn-outline-info-2x btn-pill',
//                 title: InfoButton,
//             },
//             {
//                 size: 'lg',
//                 colorClass: 'air-warning btn-outline-warning-2x btn-pill',
//                 title: WarningButton,
//             },
//             {
//                 size: 'lg',
//                 colorClass: 'air-danger btn-outline-danger-2x btn-pill',
//                 title: DangerButton,
//             },
//             {
//                 size: 'lg',
//                 colorClass: 'air-light btn-outline-light-2x btn-pill text-dark',
//                 title: LightButton,
//             }
//         ]
//     },
//     {
//         title: OutlineLargeButtons,
//         span: Add,
//         code: `.btn-pill`,
//         detail: ' , ',
//         code1: `.btn-air-*`,
//         detail1: ' ,',
//         code2: `.btn-outline-*`,
//         detail2: ' and',
//         code3: `.btn-lg`,
//         detail3: 'class for large button with outline',
//         cardId: 'outline-bold-button',
//         btnSub: [
//             {
//                 size: 'lg',
//                 colorClass: 'air-primary btn-outline-primary btn-pill',
//                 title: PrimaryButton,
//             },
//             {
//                 size: 'lg',
//                 colorClass: 'air-secondary btn-outline-secondary btn-pill',
//                 title: SecondaryButton,
//             },
//             {
//                 size: 'lg',
//                 colorClass: 'air-success btn-outline-success btn-pill',
//                 title: SuccessButton,
//             },
//             {
//                 size: 'lg',
//                 colorClass: 'air-info btn-outline-info btn-pill',
//                 title: InfoButton,
//             },
//             {
//                 size: 'lg',
//                 colorClass: 'air-warning btn-outline-warning btn-pill',
//                 title: WarningButton,
//             },
//             {
//                 size: 'lg',
//                 colorClass: 'air-danger btn-outline-danger btn-pill',
//                 title: DangerButton,
//             },
//             {
//                 size: 'lg',
//                 colorClass: 'air-light btn-outline-light btn-pill',
//                 title: LightButton,
//             }
//         ]
//     },
//     {
//         title: OutlineSmallButtons,
//         span: Add,
//         code: `.btn-pill`,
//         detail: ' , ',
//         code1: `.btn-air-*`,
//         detail1: ' ,',
//         code2: `.btn-outline-*`,
//         detail2: ' and',
//         code3: `.btn-sm`,
//         detail3: 'class for small button with outline',
//         cardId: 'outline-small-button',
//         btnSub: [
//             {
//                 size: 'sm',
//                 colorClass: 'btn-pill btn-outline-primary',
//                 title: PrimaryButton,
//             },
//             {
//                 size: 'sm',
//                 colorClass: 'btn-pill btn-outline-secondary',
//                 title: SecondaryButton,
//             },
//             {
//                 size: 'sm',
//                 colorClass: 'btn-pill btn-outline-success',
//                 title: SuccessButton,
//             },
//             {
//                 size: 'sm',
//                 colorClass: 'btn-pill btn-outline-info',
//                 title: InfoButton,
//             },
//             {
//                 size: 'sm',
//                 colorClass: 'btn-pill btn-outline-warning',
//                 title: WarningButton,
//             },
//             {
//                 size: 'sm',
//                 colorClass: 'btn-pill btn-outline-danger',
//                 title: DangerButton,
//             },
//             {
//                 size: 'sm',
//                 colorClass: 'btn-pill btn-outline-light',
//                 title: LightButton,
//             },
//         ]
//     },
//     {
//         title: OutlineExtraSmallButtons,
//         span: Add,
//         code: `.btn-pill`,
//         detail: ' , ',
//         code1: `.btn-air-*`,
//         detail1: ' ,',
//         code2: `.btn-outline-*`,
//         detail2: ' and',
//         code3: `.btn-xs`,
//         detail3: 'class for extra small button with outline',
//         cardId: 'ex-outline-small-button',
//         btnSub: [
//             {
//                 size: 'xs',
//                 colorClass: 'air-primary btn-outline-primary btn-pill',
//                 title: PrimaryButton,
//             },
//             {
//                 size: 'xs',
//                 colorClass: 'air-secondary btn-outline-secondary btn-pill',
//                 title: SecondaryButton,
//             },
//             {
//                 size: 'xs',
//                 colorClass: 'air-success btn-outline-success btn-pill',
//                 title: SuccessButton,
//             },
//             {
//                 size: 'xs',
//                 colorClass: 'air-info btn-outline-info btn-pill',
//                 title: InfoButton,
//             },
//             {
//                 size: 'xs',
//                 colorClass: 'air-warning btn-outline-warning btn-pill',
//                 title: WarningButton,
//             },
//             {
//                 size: 'xs',
//                 colorClass: 'air-danger btn-outline-danger btn-pill',
//                 title: DangerButton,
//             },
//             {
//                 size: 'xs',
//                 colorClass: 'air-light btn-outline-light btn-pill',
//                 title: LightButton,
//             }
//         ]
//     },
//     {
//         title: DisabledOutlineButtons,
//         span: Add,
//         code: `.disabled`,
//         detail: ' class or ',
//         code1: `disabled='disabled'`,
//         detail1: ' attribute for disabled state',
//         cardId: 'ex-outline-small-button',
//         btnSub: [
//             {
//                 colorClass: 'air-primary btn-outline-primary btn-pill disabled',
//                 title: Disabled,
//             },
//             {
//                 colorClass: 'air-secondary btn-outline-secondary btn-pill disabled',
//                 title: Disabled,
//             },
//             {
//                 colorClass: 'air-success btn-outline-success btn-pill disabled',
//                 title: Disabled,
//             },
//             {
//                 colorClass: 'air-info btn-outline-info btn-pill disabled',
//                 title: Disabled,
//             },
//             {
//                 colorClass: 'air-warning btn-outline-warning btn-pill disabled',
//                 title: Disabled,
//             },
//             {
//                 colorClass: 'air-danger btn-outline-danger btn-pill disabled',
//                 title: Disabled,
//             },
//             {
//                 colorClass: 'air-light btn-outline-light btn-pill disabled text-dark',
//                 title: Disabled,
//             },
//         ]
//     },
//     {
//         title: GradienButtons,
//         span: Add,
//         code: `.btn-pill`,
//         detail: ' , ',
//         code1: `.btn-air-*`,
//         detail1: ' ,',
//         code2: `.btn-*`,
//         detail2: ' and',
//         code3: `.btn-gradien`,
//         detail3: 'class for gradien button',
//         cardId: 'gradiant',
//         btnSub: [
//             {
//                 colorClass: 'primary-gradien btn-air-primary btn-pill',
//                 title: PrimaryButton,
//             },
//             {
//                 colorClass: 'secondary-gradien btn-air-secondary btn-pill',
//                 title: SecondaryButton,
//             },
//             {
//                 colorClass: 'success-gradien btn-air-success btn-pill',
//                 title: SuccessButton,
//             },
//             {
//                 colorClass: 'info-gradien btn-air-info btn-pill',
//                 title: InfoButton,
//             },
//             {
//                 colorClass: 'warning-gradien btn-air-warning btn-pill',
//                 title: WarningButton,
//             },
//             {
//                 colorClass: 'danger-gradien btn-air-danger btn-pill',
//                 title: DangerButton,
//             },
//             {
//                 colorClass: 'light-gradien btn-air-light btn-pill text-dark',
//                 title: LightButton,
//             }
//         ]
//     },
// ]
