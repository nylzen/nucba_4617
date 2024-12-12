import {
  StatusBarActiveStyled,
  StatusBarContainerStyled,
  StatusBarLineStyled,
  StatusBarTitleStyled,
} from './StatusBar.styles';

const StatusBar = props => {
  const {
    base_stat,
    stat: { name },
    firstType,
  } = props;

  return (
    <StatusBarContainerStyled>
      <StatusBarTitleStyled>{name}</StatusBarTitleStyled>
      <StatusBarLineStyled>
        <StatusBarActiveStyled
          power={base_stat}
          type={firstType}
        ></StatusBarActiveStyled>
      </StatusBarLineStyled>
    </StatusBarContainerStyled>
  );
};

export default StatusBar;
