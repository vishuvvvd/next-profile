# First stage: builder
FROM node:22-alpine AS builder

WORKDIR /workdir

COPY package.json package-lock.json ./

RUN npm ci --loglevel verbose

# Debugging: List the files in the builder stage to ensure package-lock.json exists
RUN ls -la /workdir

# Copy the rest of the files after npm ci
COPY . .

RUN echo "Starting build!"
RUN chmod -R 777 /workdir
RUN npm run build

RUN echo "Build Completed"

# Second stage: final (instead of another builder)
FROM node:22-alpine AS final

RUN echo "Starting Directory creation"

WORKDIR /workdir

RUN echo "Directory created successfully!"

#COPY --from=builder /workdir/node_modules ./node_modules
COPY --from=builder /workdir/package.json .
COPY --from=builder /workdir/package-lock.json .
COPY --from=builder /workdir/next.config.ts ./

# COPY --from=builder /workdir/public ./public
COPY --from=builder /workdir/.next/standalone ./
RUN mkdir -p ./public/vd
RUN mkdir -p ./public/vd/_next

COPY --from=builder /workdir/.next/static ./.next/static
COPY --from=builder /workdir/.next/static ./public/vd/_next/static
COPY --from=builder /workdir/.next/static ./.next

CMD ["node", "./server.js"]
#CMD ["npm", "start"]
