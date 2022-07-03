import { ReactComponent as EthIcon } from '@assets/EthIcon.svg';
import { ReactComponent as PersonIcon } from '@assets/PersonIcon.svg';
import { ReactComponent as DiscordIcon } from '@assets/SocialIcons/DiscordIcon.svg';
import { ReactComponent as GitHubIcon } from '@assets/SocialIcons/GitHubIcon.svg';
import { ReactComponent as LeafIcon } from '@assets/SocialIcons/LeafIcon.svg';
import { ReactComponent as TelegramIcon } from '@assets/SocialIcons/TelegramIcon.svg';
import { ReactComponent as TwitterIcon } from '@assets/SocialIcons/TwitterIcon.svg';
import { AutTextField } from '@components/Fields/AutFields';
import AFileUpload from '@components/Fields/AutFileUpload';
import { Box, styled, SvgIcon, Typography, useMediaQuery } from '@mui/material';
import { pxToRem } from '@utils/text-size';
import { Controller, useForm } from 'react-hook-form';
import { toBase64 } from 'sw-web-shared';
import { AutButton } from '@components/AutButton';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { HolderData } from '@store/holder/holder.reducer';

const ImageUpload = styled('div')(({ theme }) => ({
  width: pxToRem(160),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  textAlign: 'center',
}));

const TopWrapper = styled(Box)(({ theme }) => ({
  paddingLeft: pxToRem(100),
  paddingRight: pxToRem(100),
  paddingTop: pxToRem(150),
  paddingBottom: pxToRem(100),
  '@media(max-width: 1200px)': {
    paddingLeft: pxToRem(50),
    paddingRight: pxToRem(50),
    paddingTop: pxToRem(100),
    paddingBottom: pxToRem(100),
  },
  '@media(max-width: 360px)': {
    paddingLeft: pxToRem(30),
    paddingRight: pxToRem(30),
    paddingTop: pxToRem(30),
    paddingBottom: pxToRem(30),
  },
}));

const MiddleWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flex: '1',
  justifyContent: 'flex-start',
  flexDirection: 'row',
  width: '100%',
  alignItems: 'flex-start',

  '@media(max-width: 1200px)': {
    flexDirection: 'column-reverse',
    justifyContent: 'flex-end',
  },
}));
const LeftWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '70%',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  '@media(max-width: 1200px)': {
    width: '100%',
  },
}));

const RightWrapper = styled('div')(({ theme }) => ({
  width: '30%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  alignSelf: 'flex-start',
  '@media(max-width: 1200px)': {
    justifyContent: 'center',
    alignItems: 'center',
    justifyItems: 'center',
    alignContent: 'center',
    width: '100%',
    marginBottom: pxToRem(30),
  },
}));

const BottomWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  padding: pxToRem(50),
  marginBottom: pxToRem(50),
  marginTop: pxToRem(50),
  alignItems: 'center',
  justifyContent: 'center',
  alignContent: 'center',
  display: 'flex',
  '@media(max-width: 1200px)': {
    alignContent: 'center',
    justifyContent: 'center',
    padding: pxToRem(30),
  },
}));

const FormWrapper = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  // height: '100%',
  alignItems: 'flex-start',
  width: '100%',
  paddingLeft: pxToRem(100),
  paddingRight: pxToRem(100),

  '@media(max-width:1200px)': {
    width: '100%',
    paddingLeft: '0',
    paddingRight: '0',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

const FieldWrapper = styled('div')({
  flexDirection: 'row',
  marginBottom: pxToRem(20),
  minHeight: pxToRem(70),
  display: 'flex',
  width: '100%',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',

  '@media(max-width: 1200px)': {
    justifyContent: 'center',
    alignItems: 'center',
  },

  '@media(max-width: 360px)': {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: pxToRem(30),
  },
});

const AutProfileEdit = (props) => {
  const location = useLocation();
  const history = useHistory();
  const desktop = useMediaQuery('(min-width:1200px)');
  const xs = useMediaQuery('(max-width:360px)');
  const holderData = useSelector(HolderData);

  const profile = {
    name: 'Eulalie',
    eth: 'eulalie.eth',
    discord: '',
    github: '',
    twitter: '',
    telegram: '',
    leaf: '',
    image: 'https://i.picsum.photos/id/417/150/150.jpg?hmac=yboAtr7dmL8WFVtIjh85ksGN27GFgp2VbyYBdFtiEKs',
  };

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: profile?.name,
      eth: profile?.eth,
      discord: profile.discord,
      github: profile.github,
      twitter: profile?.twitter,
      telegram: profile?.telegram,
      leaf: profile.leaf,
      image: profile.image,
    },
  });

  const values = watch();

  const onSubmit = (data: any) => {
    // edit profile
  };

  return (
    <FormWrapper autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <TopWrapper
        sx={{
          paddingLeft: desktop ? pxToRem(100) : !xs ? pxToRem(50) : pxToRem(30),
          paddingRight: desktop ? pxToRem(100) : !xs ? pxToRem(50) : pxToRem(30),
          paddingTop: desktop ? pxToRem(150) : !xs ? pxToRem(100) : pxToRem(30),
          paddingBottom: desktop ? pxToRem(100) : !xs ? pxToRem(100) : pxToRem(30),
        }}
      >
        <Typography fontSize={pxToRem(40)} textTransform="uppercase" color="background.paper" textAlign="left">
          Edit your profile
        </Typography>
      </TopWrapper>
      <MiddleWrapper>
        <LeftWrapper>
          <FieldWrapper>
            <SvgIcon
              sx={{
                height: pxToRem(34),
                width: pxToRem(31),
                mr: pxToRem(20),
              }}
              component={PersonIcon}
            />
            <Controller
              name="name"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { name, value, onChange } }) => {
                return (
                  <AutTextField
                    width="80%"
                    required
                    name={name}
                    value={value || ''}
                    onChange={onChange}
                    placeholder="Name"
                    sx={{
                      mb: pxToRem(45),
                    }}
                  />
                );
              }}
            />
          </FieldWrapper>
          <FieldWrapper>
            <SvgIcon
              sx={{
                height: pxToRem(35),
                mr: pxToRem(20),
                width: pxToRem(31),
              }}
              component={EthIcon}
            />
            <Controller
              name="eth"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { name, value, onChange } }) => {
                return (
                  <AutTextField
                    width="80%"
                    required
                    name={name}
                    value={value || ''}
                    onChange={onChange}
                    placeholder="Eth Address"
                    sx={{
                      mb: pxToRem(45),
                    }}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                );
              }}
            />
          </FieldWrapper>
          <FieldWrapper>
            <SvgIcon
              sx={{
                height: pxToRem(34),
                width: pxToRem(31),
                mr: pxToRem(20),
              }}
              component={DiscordIcon}
            />
            <Controller
              name="discord"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { name, value, onChange } }) => {
                return (
                  <AutTextField
                    width="80%"
                    required
                    name={name}
                    value={value || ''}
                    onChange={onChange}
                    placeholder="Discord"
                    sx={{
                      mb: pxToRem(45),
                    }}
                  />
                );
              }}
            />
          </FieldWrapper>
          <FieldWrapper>
            <SvgIcon
              sx={{
                height: pxToRem(34),
                width: pxToRem(31),
                mr: pxToRem(20),
              }}
              component={GitHubIcon}
            />
            <Controller
              name="github"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { name, value, onChange } }) => {
                return (
                  <AutTextField
                    width="80%"
                    required
                    name={name}
                    value={value || ''}
                    onChange={onChange}
                    placeholder="GitHub"
                    sx={{
                      mb: pxToRem(45),
                    }}
                  />
                );
              }}
            />
          </FieldWrapper>
          <FieldWrapper>
            <SvgIcon
              sx={{
                height: pxToRem(34),
                width: pxToRem(31),
                mr: pxToRem(20),
              }}
              component={TwitterIcon}
            />
            <Controller
              name="twitter"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { name, value, onChange } }) => {
                return (
                  <AutTextField
                    width="80%"
                    required
                    name={name}
                    value={value || ''}
                    onChange={onChange}
                    placeholder="Twitter"
                    sx={{
                      mb: pxToRem(45),
                    }}
                  />
                );
              }}
            />
          </FieldWrapper>
          <FieldWrapper>
            <SvgIcon
              sx={{
                height: pxToRem(34),
                width: pxToRem(31),
                mr: pxToRem(20),
              }}
              component={TelegramIcon}
            />
            <Controller
              name="telegram"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { name, value, onChange } }) => {
                return (
                  <AutTextField
                    width="80%"
                    required
                    name={name}
                    value={value || ''}
                    onChange={onChange}
                    placeholder="Telegram"
                    sx={{
                      mb: pxToRem(45),
                    }}
                  />
                );
              }}
            />
          </FieldWrapper>
          <FieldWrapper>
            <SvgIcon
              sx={{
                height: pxToRem(34),
                width: pxToRem(31),
                mr: pxToRem(20),
              }}
              component={LeafIcon}
            />
            <Controller
              name="leaf"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { name, value, onChange } }) => {
                return (
                  <AutTextField
                    width="80%"
                    required
                    name={name}
                    value={value || ''}
                    onChange={onChange}
                    placeholder="Leaf"
                    sx={{
                      mb: pxToRem(45),
                    }}
                  />
                );
              }}
            />
          </FieldWrapper>
        </LeftWrapper>
        <RightWrapper>
          <ImageUpload>
            <Controller
              name="image"
              control={control}
              render={({ field: { onChange, value } }) => {
                return (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <AFileUpload
                      initialPreviewUrl={value}
                      fileChange={async (file) => {
                        if (file) {
                          onChange(await toBase64(file));
                        } else {
                          onChange(null);
                        }
                      }}
                    />
                  </div>
                );
              }}
            />
          </ImageUpload>
        </RightWrapper>
      </MiddleWrapper>
      <BottomWrapper>
        <AutButton
          onClick={() => history.goBack()}
          sx={{
            width: desktop ? pxToRem(250) : pxToRem(150),
            height: pxToRem(50),
          }}
          type="submit"
          color="primary"
          variant="outlined"
        >
          Cancel
        </AutButton>
        <AutButton
          onClick={handleSubmit(onSubmit)}
          sx={{
            width: desktop ? pxToRem(250) : pxToRem(150),
            height: pxToRem(50),
            marginLeft: pxToRem(50),
          }}
          type="submit"
          color="primary"
          variant="outlined"
        >
          Save
        </AutButton>
      </BottomWrapper>
    </FormWrapper>
  );
};

export default AutProfileEdit;