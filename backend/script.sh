for r in $(grep 'image: \${DOCKER_REGISTRY}' docker-compose.yml | sed -e 's/^.*\///')
do
    echo $r
    aws ecr create-repository --repository-name "$r"
done