FROM openjdk:8

# Install general dependencies
RUN dpkg --add-architecture i386 && apt-get update && apt-get install -yq \
    apt-transport-https \
    autoconf \
    automake \
    build-essential \
    imagemagick \
    jq \
    libc6:i386 \
    libcurl3-gnutls \
    libcurl4-openssl-dev \
    libncurses5:i386 \
    librsvg2-bin \
    libssl-dev \
    libstdc++6:i386 \
    pkg-config \
    python \
    python-dev \
    python-setuptools \
    software-properties-common \
    zlib1g:i386 \
    zlib1g-dev \
    --no-install-recommends

RUN mkdir -p /opt/app
WORKDIR /opt/app

ENV ANDROID_HOME="/opt/android-sdk-linux"
ENV ANDROID_SDK="${ANDROID_HOME}"
ENV PATH="${ANDROID_SDK}/tools:${ANDROID_SDK}/platform-tools:${ANDROID_SDK}/tools/bin:${PATH}"
RUN echo "export PATH=${PATH}" > /root/.profile

# Install Android SDK (based on: https://github.com/gfx/docker-android-project/blob/master/Dockerfile)
# See for CircleCI Issue:
#  https://discuss.circleci.com/t/failed-to-register-layer-error-processing-tar-file-exit-status-1-container-id-249512-cannot-be-mapped-to-a-host-id/13453/5
# Grab URL from footer of https://developer.android.com/studio/index.html
# Following URL is for 26.0.2
ENV ANDROID_SDK_URL https://dl.google.com/android/repository/sdk-tools-linux-3859397.zip

#ENV ANDROID_BUILD_TOOLS_VERSION 26.0.2,25.0.3
#ENV ANDROID_API_LEVELS android-26,android-25
#ENV ANDROID_COMPONENTS platform-tools,build-tools-${ANDROID_BUILD_TOOLS_VERSION},${ANDROID_API_LEVELS}
#ENV GOOGLE_COMPONENTS extra-android-m2repository,extra-google-m2repository,extra-google-google_play_services,extra-google-gcm

RUN curl -L "${ANDROID_SDK_URL}" -o /tmp/android-sdk-linux.zip && \
    unzip /tmp/android-sdk-linux.zip -d /opt/ && \
    chown -R root:root /opt && \
    rm /tmp/android-sdk-linux.zip && \
    mkdir ${ANDROID_HOME} && \
    mv /opt/tools ${ANDROID_HOME}/ && \
    ls ${ANDROID_HOME} && \
    ls ${ANDROID_HOME}/tools && chown -R root:root ${ANDROID_HOME}

COPY . .

